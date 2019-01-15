const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const color = botconfig.color;
const errors = require("../utils/errors.js");
const rankrequired = botconfig.updatecommandrequiredrank;

module.exports.run = async (bot, message, args) => {

  message.delete();
  let role = message.guild.roles.find("name", `${rankrequired}`);
  if(!message.member.roles.has(role.id)) return message.reply(`You do not have access to perform this command.`)
  let botmessage = args.join(" ");
  let uchannel = message.guild.channels.find(`name`, "「☎」updates");
  let argument = args.join(" ");
  let bicon = bot.user.displayAvatarURL;
  let botEmbed = new Discord.RichEmbed()
  .setColor(color)
  .setAuthor(`✎ | Updates`)
  .setDescription(argument)
  .setFooter(`Message sent by Hydra#3812`, message.author.displayAvatarURL);
  uchannel.send(botEmbed)
}

module.exports.help = {
  name: "update"
}
