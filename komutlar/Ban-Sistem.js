const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`𝐁𝐢𝐠$𝐁𝐨𝐬𝐬   | Ban Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1011348727371403316/1018273039030440026/standard_8.gif"
    )
    .setDescription(
      `📛 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ban__**`,
      `🔒 \`${prefix}ban\` \n Discord Sunucundan Bir Kişiyi Banlarsın.`,
        true
    )
     .addField(
      `**__Ban Log__**`,
      `🔒 \`${prefix}ban-log\` \n Discord Sunucunda Bir Ban Log Kanalı Ayarlarsın.`,
        true
    )
     .addField(
      `**__Ban Log__**`,
      `🔒 \`${prefix}ban-yetkili\` \n Discord Sunucunda Bir Ban Yetkili Rölü Ayarlarsın.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `📌  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 📌 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 📌 \`${prefix}iletişim\` | 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  İletişim Bilgileri.`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"ban-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
