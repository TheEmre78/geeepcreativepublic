const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const fynxcode = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setAuthor(`𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 Davet Menü`)
    .setDescription(
      ` Botun Davet Linki [TIKLA](https://discord.com/api/oauth2/authorize?client_id=1074730885909319772&permissions=8&scope=bot=${client.user.id}&scope=bot&permissions=8)**\n\n **ReiXdc/PREMİUM Site`
    )
    .addField(
      `__Bilgilendirme__`,
      `🔰  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔰 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔰 \`${prefix}iletişim\` | ReiXdc/PREMİUM İletişim Bilgileri.`
    )
    .setThumbnail(
      "1074728770252054578"
    );

  return message.channel.send(fynxcode);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["davet"],
  permLevel: 0
};

exports.help = {
  name: "davet",
  description: "Davet Menüsü",
  usage: ""
};
