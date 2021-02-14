const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json')
exports.run = function(client, message) {
  
  let prefix  = ayarlar.prefix

const yardım = new Discord.MessageEmbed()
.setColor('ORANGE')
.setAuthor(`AMX Bot Yardım Menü`)
.setDescription(`


:white_small_square: **=**  \`:yardım\`:    **Bütün komutları gösterir**
:white_small_square: **=**  \`:kick\`:    **Belirtilen kullanıcıyı kickler**
:white_small_square: **=**  \`:kaçcm\`:    **Ölçer :D**
:white_small_square: **=**  \`:sil\`:    **Belirtilen sayıda mesaj siler**
:white_small_square: **=**  \`:oylama\`:    **Oylama yapmanızı sağlar**
:white_small_square: **=**  \`:forceban\`:    **İD si verilen kullanıcıyı banlar**
:white_small_square: **=**  \`:emojiekle\`:    **Gönderilen linkteki fotoğrafı emoji olarak ekler**
:white_small_square: **=**  \`:profil\`:    **Profilini gösterir**
:white_small_square: **=**  \`:slowmode\`:    **Kanala yavaş mod ayarlar**
:white_small_square: **=**  \`:dc\`:    **Doğruluk Cesaretlik oynarsınız**
:white_small_square: **=**  \`:zarat\`:    **Zar atarsınız**
:white_small_square: **=**  \`:deprembilgi\`:    **Türkiyede yaşanan son 10 depremi sıralar**
:white_small_square: **=**  \`:lock\`:    **Kanalı kilitlersiniz**
:white_small_square: **=**  \`:unlock\`:    **Kanalın kilitini açarsınız**

`)
.setImage('https://cdn.discordapp.com/attachments/790621429342142501/800442677233320006/standard_11.gf')
.setThumbnail(message.author.avatarURL())
message.channel.send(yardım)

  
   
  
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ['help'], 
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: 'Komutlar hakkında bilgi gösterir veya sistemler hakkında yardım gösterir.',
  usage: 'w!yardım'
};