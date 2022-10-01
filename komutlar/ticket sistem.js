const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;


exports.run = async (bot, msg, args) => {
  const çekiliş = new Discord.MessageEmbed()
    .setAuthor(`𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  | Ticket Sistem`)
    .setTitle(``)
   .setthumbail(
  "https://cdn.discordapp.com/attachments/1011348727371403316/1018273039030440026/standard_8.gif"
    )
    .setColor(`#ee7621`)
     .setThumbnail(
      "https://cdn.discordapp.com/attachments/1011348727371403316/1018273039030440026/standard_8.gif"
    )
    .setDescription(
      `<:discord_bot_developer:1018578605095256225> Gweep Creative Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Ticket__** `,
      `<:discord_bot_developer:1018578605095256225>  \`${prefix}bilet\` \nTicketi tekrar açar. Ticketi siler `,
      true
    )
    .addField(
      `**__Ticket Kapat__**`,
      `<:discord_bot_developer:1018578605095256225>  \`${prefix}kapat\` \nTicketi 5 saniyede siler`,
      true
    )
    .addField(
      `**__Ticket Kanal__**`,
      `<:discord_bot_developer:1018578605095256225>  \`${prefix}ticket-kanal\` \nTicket Gittiği Kanalı Ayarlar`,
      true
    )
    .addField(
      `**__Ticket Kaldır__**`,
      `<:discord_bot_developer:1018578605095256225>  \`${prefix}ticket-kaldır\` \nTicket Kanalını Kaldırır`,
      true
    )
    .addField(
      `**__Ticket Ekle__**`,
      ` <:discord_bot_developer:1018578605095256225> \`${prefix}ticket-ekle\` \nTicket Ekler`,

      true
    )
    .addField(
      `**__Ticket Aç__**`,
      ` <:discord_bot_developer:1018578605095256225>  \`${prefix}ticket-aç\` \nTicket Açar`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<:5590serverowner:1018578987099885580>   \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <:5590serverowner:1018578987099885580>  \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <:5590serverowner:1018578987099885580>  \`${prefix}iletişim\` | 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 İletişim Bilgileri.`
    );
  msg.channel.send(çekiliş);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["bilet-sistem"],
  kategori: "yardım",
  permLevel: 0
};
exports.help = {
  name: "ticket-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: ""
};
 