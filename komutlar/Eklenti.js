const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const sunucu = new Discord.MessageEmbed()
    .setAuthor(`𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  | Eklenti`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1011348727371403316/1018273039030440026/standard_8.gif"
    )
    .setDescription(
      ` <:5590serverowner:1018578987099885580>  𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Ticket Sistem__`,
      `<:1520blurplesettings:1018578965511802951> \`${prefix}ticket-sistem\` Gelişmiş Ticket Sistem`,
      true
    )
    .addField(
      `__Seviye Sistem__`,
      `<:1520blurplesettings:1018578965511802951> \`${prefix}seviye-sistem\` Gelişmiş Seviye Sistem`,
      true
    )
    .addField(
      `__OtoRol Sistem__`,
      `<:1520blurplesettings:1018578965511802951> \`${prefix}otorol-sistem\` Gelişmiş OtoRol Sistem`,
      true
    )
    .addField(
      `__ÖzelProfil Sistem__`,
      `<:1520blurplesettings:1018578965511802951> \`${prefix}profil-sistem\` Gelişmiş Profil Sistem`,
      true
    )
    .addField(
      `__Öneri Sistem__`,
      `<:1520blurplesettings:1018578965511802951> \`${prefix}öneri-sistem\` Ayarlanabilir Öneri Sistem`,
      true
    )
    .addField(
      `__Ban Sistem__`,
      `<:1520blurplesettings:1018578965511802951> \`${prefix}ban-sistem\` Ayarlanabilir Ban Sistem`,
      true
    )
      .addField(
      `__AboneRol Sistem__`,
      `<:1520blurplesettings:1018578965511802951> \`${prefix}abonerol-sistem\` Ayarlanabilir Abone Rol Sistem`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔱 \`${prefix}iletişim\` | 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  İletişim Bilgileri.`
    );
  return message.channel.send(sunucu);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "eklenti",
  description: "Yardım Menüsü",
  usage: "yardım"
};
