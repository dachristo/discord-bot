import Discord from 'discord.js';
import Config from './config.mjs';
import readMessages from './readMessages.mjs';

const connexion = async () => {
    const client = new Discord.Client();

    readMessages(client);

    const login = await client.login(Config.BOT_TOKEN);

    console.log(login);
};

await connexion();