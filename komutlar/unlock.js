const Discord = require('discord.js');
 
exports.run = (client, message, args) => {// can#0002
if(!message.member.hasPermission('MANAGE_CHANNELS')) return;

let channel = message.mentions.channels.first() || message.channel;
message.channel.send(`Şu addaki kanal ${channel} açıldı.`).then(m => m.delete({timeout: 7000}));

let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': null }, 'Şu kişi tarafından açıldı '+message.author.tag);
channel.send(new Discord.MessageEmbed()
.setColor('ORANGE')
.setTitle(channel.name+' adlı kanal açıldı.')
.setDescription(`Yetkililer bu kanalı açtı şanslısın.`));

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'unlock'
};// codare ♥