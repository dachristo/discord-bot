let ARRAY_LENGTH = 6;
let magazine = [];

const createMagazine = () => {
    const bulletPlacement = Math.floor(Math.random() * Math.floor(ARRAY_LENGTH))
    magazine = [...new Array(ARRAY_LENGTH)].map((_, index) => index === bulletPlacement ? 1 : 0);
}

const fire = () => {
    const nextBullet = magazine[0];
    magazine.shift();

    return nextBullet;
}
export default (message) => {
    if (magazine.length === 0) {
        createMagazine();
    }
    const dead = fire();
    if (dead) {
        createMagazine();
        message.reply('Vous êtes mort dommage');
    } else {
        message.reply(`Il reste encore ${magazine.length} coups dans le chargeur`);
    }
}