const { StringSelectMenuInteraction } = require("discord.js");

module.exports.data = {
    name: "player_SelectionFunc",
    type: "SelectMenu",
}
/**
 * @param { StringSelectMenuInteraction } interaction
 */
module.exports.execute = async (interaction) => {
    interaction.channel
    const query = interaction.values?.at(0)
    // const command = interaction.client.functions.get("Search");
    // await command.execute(interaction, query);
    return;
}