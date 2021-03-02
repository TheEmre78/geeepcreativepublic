const Discord = require("discord.js");
var steam = require("steam-provider");
var provider = new steam.SteamProvider();

  let prefix = process.env.prefix;

exports.run = (client, message, args) => {
  let game = args[0];
  let steampng =
    "https://cdn.discordapp.com/attachments/458004691402489856/470344660364034049/steam.png";
  if (!game)
    return  message.channel.send(new Discord.MessageEmbed() .setColor("BLACK").setDescription(
      `<@${message.author.id}> | Lütfen Steamde Olan Bir Oyunun Adını Yazın. Örnek: \`${prefix}steam [Oyun]\``
      )
    );
  provider.search(game).then(result => {
    provider.detail(result[0].id, "turkey", "tr").then(results => {
      console.log(results);
      const embed = new Discord.MessageEmbed()
        .setAuthor("Steam Store", steampng)
        .setColor("BLACK")
        .setTitle(result[0].name)
        .addField(`Oyunun ID'sı`, result[0].id)
        .setThumbnail(results.otherData.imageUrl)
        .addField("Türleri", results.genres)
        .addField(
          "Fiyati",
          `Nolmal Fiyat **${results.priceData.initialPrice}** TL
İndirimli Fiyat **${results.priceData.finalPrice}** TL`,
          true
        )
        .addField("Platformlar", results.otherData.platforms, true)
        .addField("Metacritic Puanı", results.otherData.metacriticScore, true)
        .addField("Etiketleri", results.otherData.features, true)
        .addField("Geliştiricileri", results.otherData.developer, true)
        .addField("Yayımcıları", results.otherData.publisher)
        .setColor("BLACK");
      message.channel.send(embed).catch(e => {
        console.log(e);
        message.reply("Hata Olustu Yada `" + game + "` Adlı Oyun Bulunamadı");
      });
    });
  });
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["steam"],
  permLevel: 0
};

exports.help = {
  name: "steamoyun",
  description: "steamstore",
  usage: "steamoyun"
};