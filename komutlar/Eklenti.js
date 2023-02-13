const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const sunucu = new Discord.MessageEmbed()
    .setAuthor(`ReiXdc/PREMİUM  | Eklenti`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1050853850740965508/1074728770050719824/Reix_Ozel_Bot_Photo.png"
    )
    .setDescription(
      `   ReiXdc/PREMİUM  Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Ticket Sistem__`,
      ` \`${prefix}ticket-sistem\` Gelişmiş Ticket Sistem`,
      true
    )
    .addField(
      `__Seviye Sistem__`,
      ` \`${prefix}seviye-sistem\` Gelişmiş Seviye Sistem`,
      true
    )
    .addField(
      `__OtoRol Sistem__`,
      ` \`${prefix}otorol-sistem\` Gelişmiş OtoRol Sistem`,
      true
    )
    .addField(
      `__ÖzelProfil Sistem__`,
      ` \`${prefix}profil-sistem\` Gelişmiş Profil Sistem`,
      true
    )
    .addField(
      `__Öneri Sistem__`,
      ` \`${prefix}öneri-sistem\` Ayarlanabilir Öneri Sistem`,
      true
    )
    .addField(
      `__Ban Sistem__`,
      ` \`${prefix}ban-sistem\` Ayarlanabilir Ban Sistem`,
      true
    )
      .addField(
      `__AboneRol Sistem__`,
      ` \`${prefix}abonerol-sistem\` Ayarlanabilir Abone Rol Sistem`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `🔱  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔱 \`${prefix}iletişim\` | ReiXdc/PREMİUM  İletişim Bilgileri.`
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
