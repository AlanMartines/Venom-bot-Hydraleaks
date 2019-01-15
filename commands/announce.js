const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const color = botconfig.color;
const errors = require("../utils/errors.js");
const requiredrank = botconfig.announcecommandrequiredrank;
const lang = require("../lang.json")
const embedfooter = lang.AnnounceEmbedFooter;

module.exports.run = async (bot, message, args) => {

  message.delete();
  let role = message.guild.roles.find("name", `${requiredrank}`);
  if(!message.member.roles.has(role.id)) return message.reply(`You do not have access to perform this command.`)
  let achannel = message.guild.channels.find(`name`, "「⌚」announcements");
  let argument = args.join(" ");
  let sicon = bot.user.displayAvatarURL;
  let botEmbed = new Discord.RichEmbed()
  .setColor(color)
  .setAuthor(`⚠ | Announcement`)
  .setThumbnail()
  .setDescription(argument)
  .setFooter(`${embedfooter}`);
  achannel.send(botEmbed)
}

module.exports.help = {
  name: "announce"
}
