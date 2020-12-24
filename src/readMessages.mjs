import Config from '../config/config.mjs';
import roulette from './roulette.mjs';

export default (client) => {
    client.on('message', (message) => {
        if (message.author.bot) return;
        if (message.content[0] !== Config.PREFIX) return;

        const args = message.content.split(' ');
        switch (args[0]) {
            case '!roulette':
                return roulette(message);
        }
    })
}