const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 DESTEK`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1011348727371403316/1018273039030440026/standard_8.gif"
    )
    .setDescription(
      `<a:aaworld:979833178934108170> 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 Botumuzu Eklemek İçin \`${prefix}davet\`<a:mavitik:1022210829304746076> yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `<a:earthblack:1022207943116066887> \`${prefix}genel\``,
      true
    )
    .addField(
      `__Ayarlar Komutlar__`,
      `<a:ayar:1022209437026484244>  \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Kullanıcı Komutlar__`,
      `<a:leise_oksag:1022208279222431814> \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Çekiliş Komutlar__`,
      `<a:aacekilis:1022208053514350654> \`${prefix}çekiliş\` `,
      true
    )
    .addField(
      `__Eklenti Komutlar__`,
      `<a:AyarGif:1022208780072656977> \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Eğlence Komutlar__`,
      `<a:goyun:1022208380170932365> \`${prefix}eğlence\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:mavitik:1022210829304746076>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:emoji_12:979725849731407873> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:emoji_12:979725813740093440> \`${prefix}iletişim\` | 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  İletişim Bilgileri.`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
