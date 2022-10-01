const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const embedkullanıcı = new Discord.MessageEmbed()
    .setAuthor(` 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 | Kullanıcı`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1011348727371403316/1018273039030440026/standard_8.gif"
    )
   .setDescription(
      `<a:aaworld:979833178934108170> 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 Botumuzu Eklemek İçin \`${prefix}davet\`<a:mavitik:1022210829304746076> yazabilirsiniz.`
    )
    .addField(
      `__Rozetler__`,
      `<a:Coup_takim_elbise:1022214889558790195>\`${prefix}rozetler\` Discord Bot Discord Aldıgınız Rozetleri Komutla Görürsün.`,
      true
    )
    .addField(
      `__Profil__`,
      `<a:Coup_takim_elbise:1022214889558790195> \`${prefix}profil\` Discord Bot Size Özel Profil Ayarlar.`,
      true
    )
    .addField(
      `__Avatarım__`,
      `<a:Coup_takim_elbise:1022214889558790195> \`${prefix}avatar\` Discord Bot Sizin Avatarınızı Yansıtır.`,
      true
    )
    .addField(
      `__Bot Bilgi__`,
      `<a:Coup_takim_elbise:1022214889558790195> \`${prefix}botbilgi\` Discord Botumuzun İstatistiklerini Bakarsınız.`,
      true
    )
    .addField(
      `__Rol Bilgi__`,
      `<a:Coup_takim_elbise:1022214889558790195> \`${prefix}rolbilgi\` Etiketlediginiz Bir Rolü Bot Bilgilerini Gösterir.`,
      true
    )
    .addField(
      `__Yetkilerim__`,
      `<a:Coup_takim_elbise:1022214889558790195>\`${prefix}yetkilerim\` Discord Bot Size Yetkilerinizi Gösterir.`,true
    )
 .addField(
      `__Bilgilendirme__`,
      `<a:mavitik:1022210829304746076>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:emoji_12:979725849731407873> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:emoji_12:979725813740093440> \`${prefix}iletişim\` | 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  İletişim Bilgileri.`
    );
  return message.channel.send(embedkullanıcı);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "kullanıcı",
  description: "kullanıcı Menüsü",
  usage: "kullanıcı"
};
