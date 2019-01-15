const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const color = botconfig.color;
const rankrequired = botconfig.staffhelpcommandrequiredrank;

module.exports.run = async (bot, message, args) => {
    let bicon = bot.user.displayAvatarURL;
    let botEmbed = new Discord.RichEmbed()
    .setColor(color)
    .addField("**VENOM © Commands**", "Bot is currently in development.\nYou can suggest us what to add or tell us if there is a bug.\n:newspaper: **Informations**\n-announce | Announce message in embed!\n-clear | Clear channel chat!\n-say | Create embeded messages!\n-setprefix | Set the bot's command prefix!\n-setstatus | Set the bots current status!\n-update | Update server with server changes!\n:trident: **Other**\nWe are adding new features very soon!")

    let staffEmbed = new Discord.RichEmbed()
    .setColor(color)
    .addField("**VENOM © Commands**", "Bot is currently in development.\nYou can suggest us what to add or tell us if there is a bug.\n:newspaper: **Informations**\n-announce | Announce message in embed!\n-clear | Clear channel chat!\n-say | Create embeded messages!\n-setprefix | Set the bot's command prefix!\n-setstatus | Set the bots current status!\n-update | Update server with server changes!\n:trident: **Other**\nWe are adding new features very soon!")
    let role = message.guild.roles.find("name", `${rankrequired}`);
    if(!message.member.roles.has(role.id)) return message.channel.send(botEmbed)
    message.channel.send(staffEmbed);
}

module.exports.help = {
  name:"help"
}
