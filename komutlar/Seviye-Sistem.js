const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`ReiXdc/PREMİUM | Seviye Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1050853850740965508/1074728770050719824/Reix_Ozel_Bot_Photo.png"
    )
    .addField(
      ` ReiXdc/PREMİUM Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    .setDescription(
    )
      `**__Seviye__**`,
      ` \`${prefix}seviye\` \n Sizin Özelliştirdiginiz Seviye Sıralama Kartını Gösterir.`,
        true
    )
     .addField(
      `**__Seviye Sıralama__**`,
      ` \`${prefix}sıralama\` \n Seviye DataBase 'indeki Sıralama Ranklarını Görürsün.`,
        true
    )
    .addField(
      `**__SeviyeKart Özelleştir Resim__**`,
      ` \`${prefix}seviyekart-özelleştir resim\` \n Seviye Kartınıza Özel Arka Plan Ayarlarsınız.`,
        true
    )
   .addField(
      `**__SeviyeKart Özelleştir Renk__**`,
      ` \`${prefix}seviyekart-özelleştir renk\` \n Seviye Kartınıza Özel Renk Ayarlarsınız.`,
        true
    )
    .addField(
      `**__Seviye Aç__**`,
      ` \`${prefix}seviye-ayarla durum aç\` \n Discord Sunucunuzda Seviye Sistemini Açarsınız.`,
        true
    )
     .addField(
      `**__Seviye Kapat__**`,
      ` \`${prefix}seviye-ayarla durum kapat\` \n Discord Sunucunuzda Seviye Sistemini Kapatırsınız.`,
        true
    )
     .addField(
      `**__Seviye Kanal__**`,
      ` \`${prefix}seviye-ayarla log kanal\` \n Discord Sunucunuzda Seviye Log Kanal Ayarlarsanız.`,
        true
    )
     .addField(
      `**__Seviye Mesaj__**`,
      ` \`${prefix}seviye-ayarla log mesaj seviye\` \n Seviye Log Kanalına Gidecek Mesaji Ayarlasınız.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n  \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n  \`${prefix}iletişim\` | ReiXdc/PREMİUM İletişim Bilgileri.`
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
  name:"seviye-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
