const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedgenel = new Discord.MessageEmbed()
    .setAuthor(`ReiXdc/PREMİUM  | Genel`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1050853850740965508/1074728770050719824/Reix_Ozel_Bot_Photo.png"
    )
   .setDescription(
      ` ReiXdc/PREMİUM Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Oylama__`,
      `    \`${prefix}oylama\` Sunucudan Bir Oylama Başlatırsın.`,
      true
    )
   .addField(
      `__Oylama Kanal__`,
      `    \`${prefix}oylama-kanal\` Sunucudan Bir Oylama Kanal Ayarlar.`,
      true
    )
    .addField(
      `__Toplam Komut__`,
      ` <a:astaff_shine:975372930831761430>   \`${prefix}komutlar\` Discord Botta Toplam Kaç Komut Var Ona Bakarsın.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      ` <a:astaff_shine:975372930831761430>   \`${prefix}botbilgi\` Botun Sunucu Ve Sürüm , Sahip İstatistikleri Bakarsın.`,
      true
    )
    .addField(
      `__Davet__`,
      ` <a:astaff_shine:975372930831761430>    \`${prefix}davet\` ShadowRise Network Davet Menüsünü Görürsün.`,
      true
    )
    .addField(
      `__Ping__`,
      ` <a:astaff_shine:975372930831761430>   \`${prefix}ping\` Discord Botun Mesaj Geçikmesi ve Bot Geçikmesini Gösterir.`,
      true
    )
    .addField(
      `__AFK__`,
      ` <a:astaff_shine:975372930831761430>   \`${prefix}afk\` Kullanıcı Bir Sebeple AFK Moduna Girer.`,
      true
    )
   .addField(
      `__V11 To V12__`,
      ` <a:astaff_shine:975372930831761430>  \`${prefix}çevir\` Disord Botlara Koyulan V11 Kodu V12 Çevirebilirsiniz.`,
      true
    )
     .addField(
      `__Say__`,
      ` <a:astaff_shine:975372930831761430>   \`${prefix}say\` Toplam Kanal Seviyeni Gösteren Gelişmiş Say Komutu.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:mavitik:1022210829304746076>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:emoji_12:979725849731407873> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:emoji_12:979725813740093440> \`${prefix}iletişim\` | 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  İletişim Bilgileri.`
    );
  return message.channel.send(embedgenel);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "genel",
  description: "Genel Menüsü",
  usage: "genel"
};
