const { parentPort, workerData } = require('worker_threads');
const { MusicSearchCard } = require('./MusicSearchCard');

async function buildImage(searchPlayer, query) {
    const card = new MusicSearchCard()
        .setPlayers(searchPlayer)
        .setTitle(query);

    const buffer = await card.build({ format: 'png' });
    console.log('Buffer length:', buffer.length); // Debugging
    parentPort.postMessage(buffer.buffer); // Send as ArrayBuffer
}

// Listen for termination signal
parentPort.on('message', (message) => {
    if (message === 'terminate') {
        console.log('Worker received terminate signal');
        process.exit(0); // Gracefully exit
    }
});

buildImage(workerData.searchPlayer, workerData.query)
    .catch(error => {
        console.error('Error in worker:', error);
        process.exit(1);
    });