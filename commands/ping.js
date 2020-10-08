module.exports = {
	name: 'ping',
	description: 'Ping!',
	execute(message) {
		message.channel.send('Pong.');
	},
};
/* client.on('message', message => {
    if (message.content.toLowerCase() === '!ping') {
    message.channel.send('Pong!');} */