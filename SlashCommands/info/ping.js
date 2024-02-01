const { Client, CommandInteraction, SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
    .setName('ping')
    .setDescription("Responses with bot's ping"),
    /**
     * 
     * @param {Client} client 
     * @param {CommandInteraction} interaction 
     * @param {string[]} args 
     */
    run: async (client, interaction, args) => {
        interaction.followUp({ content: `${client.ws.ping}ms!` });
    },
};
