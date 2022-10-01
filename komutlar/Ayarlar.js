const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (client, message) => {

  const embedayarlar = new Discord.MessageEmbed()
    .setAuthor(`𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 | Ayarlar`)
    .setTitle(``)
    .setColor("#00ff00")
    .setThumbnail(
      "https://cdn.discordapp.com/attachments/1011348727371403316/1018273039030440026/standard_8.gif"
    )
    .setDescription(
      `<a:aaworld:979833178934108170> 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬 Botumuzu Eklemek İçin \`${prefix}davet\`<a:mavitik:1022210829304746076> yazabilirsiniz.`
    )
    .addField(
      `__ModLog__`,
      `<a:staff:1012086413526839336>  \`${prefix}modlog\` Komutla Discord Sunucuza ModLog Kanalını Ayarlarsınız.`,
      true
    )
    .addField(
      `__KüfürEngel__`,
      `<a:staff:1012086413526839336>  \`${prefix}küfürengel\` Discord Sunucuna Küfür Etmeye Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Küfür Log__`,
      `<a:staff:1012086413526839336>  \`${prefix}küfürlog\` Discord Sunucuna Küfür Edenlerin Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__Reklam Engel__`,
      `<a:staff:1012086413526839336>  \`${prefix}reklamengel\` Discord Sunucuna Reklam Yapmaya Çalışanları Durdurursun.`,
      true
    )
    .addField(
      `__Reklam Log__`,
      `<a:staff:1012086413526839336>  \`${prefix}reklamlog\` Discord Sunucuna Reklam Yapmayı Mesaji Silinir Ve Log Kanalına Gider.`,
      true
    )
    .addField(
      `__BanSay__`,
      `<a:staff:1012086413526839336>  \`${prefix}bansay\` Discord Sunucunuzda Toplam Kaç Banlanmış Kişi Var Onu Gösterir.`,
      true
    )
    .addField(
      `__Sohbet AÇ__`,
      `<a:staff:1012086413526839336>  \`${prefix}sohbet-aç\` Komutu Kullandıgınız Kanalda Sohbeti Açar.`,
      true
    )
    .addField(
      `__Sohbet Kapat__`,
      `<a:staff:1012086413526839336>  \`${prefix}sohbet-kapat\` Komutu Kullandıgınız Kanalda Sohbeti Kapat.`,
      true
    )
    .addField(
      `__İsim Değiştir__`,
      `<a:staff:1012086413526839336>  \`${prefix}isimdeğiştir\` Discord Sunucunuzda Etiketlediginiz Kişinin İsmini Değiştir.`,
      true
    )
    .addField(
      `__Sil__`,
      `<a:staff:1012086413526839336>  \`${prefix}sil\` Yazdıgınız Sayı Kadar Discord Botta O Kadar Mesaj Siler.`,
      true
    )
    .addField(
      `__Mute__`,
      `<a:staff:1012086413526839336>  \`${prefix}mute\` Discord Sunucunuzda Birisini Susturursunz.`,
      true
    )
    .addField(
      `__Güvenlik__`,
      `<a:staff:1012086413526839336>  \`${prefix}güvenlik\` Güvenlik Kanalını Ayarlarsın.`,
      true
    )
    .addField(
      `__Güvenlik Sıfırla__`,
      `<a:staff:1012086413526839336>  \`${prefix}güvenlik-sıfırla\` Güvenlik Kanalını Sıfırlarsın.`,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:mavitik:1022210829304746076>   \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:emoji_12:979725849731407873> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:emoji_12:979725813740093440> \`${prefix}iletişim\` | 𝐁𝐢𝐠$𝐁𝐨𝐬𝐬  İletişim Bilgileri.`
    );
  return message.channel.send(embedayarlar);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ayarlar",
  description: "Ayarlar Menüsü",
  usage: "ayarlar"
};
