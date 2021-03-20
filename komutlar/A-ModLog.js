const Discord = require("discord.js");
const db = require("quick.db");
let prefix = process.env.prefix;

exports.run = async (client, message, args) => {
  if (!message.member.hasPermission("ADMINISTRATOR"))
    return message.channel.send(
      ` Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`
    );

  let logk = message.mentions.channels.first();
  let logkanal = await db.fetch(`log_${message.guild.id}`);

  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if (!logkanal)
      return message.channel.send(
        new Discord.MessageEmbed()
          .setColor("#00ff00")
          .setDescription(`ModLog Kanalı Zaten Ayarlı Degil.`)
      );
    db.delete(`log_${message.guild.id}`);
    message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `<:kabulet:822545421628342312> | Mod-log kanalı başarıyla sıfırlandı.`
        )
    );
    return;
  }

  if (!logk)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setColor("#00ff00")
        .setDescription(
          `<:reddet:822546675221397584> Yanlış Kullanım \n Doğru Kullanım: ${prefix}mod-log #kanal`
        )
    );

  db.set(`log_${message.guild.id}`, logk.id);

  message.channel.send(
    new Discord.MessageEmbed()
      .setColor("#00ff00")
      .setDescription(` Mod-log kanalı başarıyla ${logk} olarak ayarlandı.`)
  );
  message.react("<:kabulet:822545421628342312>");
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["mod-log", "modlog", "log-ayarlama"],
  permLevel: 3,
  kategori: "moderasyon"
};

exports.help = {
  name: "mod-log",
  description: "Mod-Log kanalını belirler.",
  usage: "mod-log <#kanal>"
};
