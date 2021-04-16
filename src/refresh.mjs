const randomNumber = () => Math.floor(Math.random() * 1000);

export default (message) => {
    const frequency = randomNumber();
    message.delete();
    message.channel.send(`Nouvelle fréquence radio : ${frequency}`);
}