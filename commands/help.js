const Discord = require('discord.js');
const client = new Discord.Client();
const helpEmbed = new Discord.MessageEmbed()
	.setColor('#D800FF')
	.setTitle('Help Page')
	// .setURL('url in here')
	.setAuthor('ShadowBot', 'https://i.imgur.com/zCQInwL.png'/* , 'url here'*/)
	.setDescription('non case sensitive')
	// .setThumbnail('https://i.imgur.com/zCQInwL.png')
	.addFields(
		{ name: '!help', value: 'List all of my commands or info about a specific command.' },
        { name: '!ping', value: 'Ping!' },
        { name: '!prune', value: 'Prune up to 99 messages.' },
        { name: '!server', value: 'Display info about this server.' },
        { name: '!user-info', value: 'Display info about yourself.' },
        // { name: '', value: '' },
	);

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	usage: '[command name]',
    execute(message) {
		message.channel.send(helpEmbed);
	},
};