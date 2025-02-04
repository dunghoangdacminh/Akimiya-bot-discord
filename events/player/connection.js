const { GuildQueueEvent } = require("discord-player");
const { useZiVoiceExtractor } = require("@zibot/ziextractor");
const config = require("@zibot/zihooks").useConfig();

module.exports = {
	name: GuildQueueEvent.connection,
	type: "Player",
	/**
	 *
	 * @param { import('discord-player').GuildQueue } queue
	 */

	execute: async (queue) => {
		if (!queue?.metadata?.voiceAssistance || !config?.DevConfig.VoiceExtractor) return;
		const speechOptions = {
			ignoreBots: true,
			minimalVoiceMessageDuration: 1,
			lang: queue?.metadata?.lang?.local_names || "vi-VN",
			focusUser: queue?.metadata?.focus || "", //user id
		};
		const { player, connection } = queue;
		const ziVoice = useZiVoiceExtractor();

		ziVoice.handleSpeakingEvent(player.client, connection, speechOptions);
	},
};
