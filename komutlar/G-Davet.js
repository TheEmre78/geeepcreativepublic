const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {


  const fynxcode = new Discord.MessageEmbed()
    .setColor("#00ff00")
    .setAuthor(`𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 Davet Menü`)
    .setDescription(
      `**<:botsemote:984558223333933076> Botun Davet Linki [TIKLA](https://discord.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)**\n\n<:king:1012087764050788433> **𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 Site [TIKLA](https://fern-round-lifter.glitch.me/)**`
    )
    .addField(
      `__Bilgilendirme__`,
      `🔰  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔰 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔰 \`${prefix}iletişim\` | 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 İletişim Bilgileri.`
    )
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1011348727371403316/1018273039030440026/standard_8.gif"
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
