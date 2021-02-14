const Discord = require('discord.js');
 
exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;

let reason;
if(!message.mentions.channels.first()) {
if(args[0]) reason = args.slice(0).join(' ');
};
if(message.mentions.channels.first()) {
if(args[1]) reason = args.slice(1).join(' ');
};

let reasonn;
if(!reason) reasonn = '. Sebep verilmedi.';
if(reason) reasonn = ` şundan dolayı ${reason}.`;
message.channel.send(`Channel ${channel} has been locked.`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'Şu kişi kanalı kilitledi '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('ORANGE')
.setTitle(channel.name+' adlı kanal kilitlendi.')
.setDescription(`Moderatörler bu kanalı şu Sebepden dolayı ${reasonn} kilitledi yakında açılcaktır ama.`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'lock'
};// codare ♥