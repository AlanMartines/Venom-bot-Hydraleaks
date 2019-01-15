const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const rankrequired = botconfig.clearcommandrequiredrank;
const lang = require("../lang.json");
const noperms = lang.NoPermission;

module.exports.run = async (bot, message, args) => {

  let role = message.guild.roles.find("name", `${rankrequired}`);
  if(!message.member.roles.has(role.id)) return message.reply(`${noperms}`)

  if(!args[0]) return message.reply(`Please provide the amount of messages to delete.`).then(msg => msg.delete(2000));
  message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(`Succesfully deleted **${args[0]}** messages.`).then(msg => msg.delete(2000));
});

}

module.exports.help = {
  name: "clear"
}
