import Config from './config.mjs';

export default (client) => {
    client.on('message', (message) => {
        if (message.author.bot) return;
        if (message.content[0] !== Config.PREFIX) return;

        const args = message.content.split(' ');
        console.log('args', args);
        message.reply('La commande a été lu');
    })
}