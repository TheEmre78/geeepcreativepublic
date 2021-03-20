const Discord = require("discord.js");
const fs = require("fs");
const db = require("quick.db");
let prefix = process.env.prefix;

module.exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      "Bu Komutu kullanmanız için `Yönetici` yetkisine sahip olmalısınız."
    );

  let d = await db.fetch(`okanal_${message.guild.id}`);
  const sea = message.guild.channels.cache.get(d);
  if (!sea)
    return message.channel.send(
      new Discord.MessageEmbed()
       .setDescription(
      `Oylama kanalı ayarlanmamış. Ayarlamak için \`${prefix}oylama-kanal #kanal\``
         )
    );

  let yazi = args.slice(0).join(" ");
  if (!yazi) return message.channel.send("Lütfen Oylamada Ne Olacağını Yaz!");
  message.channel.send(`Oylama gönderildi. Gönderilen kanal: <#${d}>`);
  const embed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .addField("__Oylama Var!__", `**${yazi}**`)
    .setThumbnail(
      ` https://media.discordapp.net/attachments/822526781839245332/822526805734850600/20210319_160634.png`
    )
    .setFooter(`${message.author.username} oylama yaptı.`)
    .setAuthor(`${client.user.username} Oylama`);
  sea.send("||@everyone|| ||@here||", { embed: embed }).then(m => {
    let re = m.react("<:kabulet:822545421628342312>");
    let ra = m.react("<:reddet:822546675221397584>");
  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["oylama-yap", "oylamayap", "oylamalar"],
  permLevel: 2,
  kategori: "yetkili"
};

exports.help = {
  name: "oylama",
  description: "Bulunduğunuz kanala oylama yapar.",
  usage: "oylama"
};