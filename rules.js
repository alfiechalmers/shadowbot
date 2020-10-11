const Discord = require('discord.js');
const client = new Discord.Client();
const rulesEmbed = new Discord.MessageEmbed()
	.setColor('#D800FF')
	.setTitle('Help Page')
	// .setURL('url in here')
	.setAuthor('ShadowBot', 'https://i.imgur.com/zCQInwL.png'/* , 'url here'*/)
	.setDescription('non case sensitive')
	// .setThumbnail('https://i.imgur.com/zCQInwL.png')
	.addFields(
		{ name: '1: Mute while playing :mute:', value: '2: Don\'t shout :loudspeaker: :no_entry_sign:' },
        { name: '3: Keep the text channel P.G (Anything inappropriate such as NSFW will result in a ban for a certain period of time):zipper_mouth: ', value: '4: Don\'t invite people without the owners permission :mailbox_with_mail: ' },
        { name: '5: Don\'t be toxic! :poop:', value: '6: Be kind to each other :grin:' },
        { name: '7: Don\'t interrupt while others are talking :shushing_face:', value: '8: No offensive jokes :face_with_symbols_over_mouth:' },
        { name: '9: Who ever reports the body in game, discusses first :face_with_monocle:', value: '10: Don\'t accuse someone in game without evidence :exploding_head:' },
        // { name: '', value: '' },
	);

module.exports = {
	name: 'help',
	description: 'List all of my commands or info about a specific command.',
	usage: '[command name]',
    execute(message) {
		message.channel.send(rulesEmbed);
	},
};