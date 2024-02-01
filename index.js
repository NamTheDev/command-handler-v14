const { Client, Collection, GatewayIntentBits } = require("discord.js");
const client = new Client({
    intents: Object.keys(GatewayIntentBits).map((value) => value)
});
module.exports = client;

// Global Variables
client.commands = new Collection();
client.slashCommands = new Collection();
client.config = require("./config");

// Initializing the project
require("./handler")(client);

client.login(client.config.token);
