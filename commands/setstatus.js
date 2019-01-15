const Discord = require("discord.js");
const botconfig = require("../botconfig.json");
const rankrequired = botconfig.setstatuscommandrequiredrank
const lang = require("../lang.json");
const noperms = lang.NoPermission;
let file = require("../status.json");
const fs = require("fs");
module.exports.run = async (bot, message, args) => {
    let role = message.guild.roles.find("name", `${rankrequired}`);
    if(role && !message.member.roles.has(role.id))
    return message.reply(`${noperms}`)
    if(!args[0]) return message.reply("Please provide a type of status!");
    if(args[0].toUpperCase() !== "WATCHING" && args[0].toUpperCase() !== "PLAYING" && args[0].toUpperCase() !== "STREAMING" && args[0].toUpperCase() !== "LISTENING") return message.reply("Wrong status! Use `playing`, `watching`, `streaming`, or `listening`");
    if(!args[1]) return message.reply("Please provide text for my status!")
    bot.user.setActivity(args.slice(1).join(" "), { type: args[0].toUpperCase() });
    file["activity"] = args.slice(1).join(" ");
    file["type"] = args[0].toUpperCase();
    fs.writeFile("./status.json", JSON.stringify(file), (err) => {
        if(err) console.log(err)
    })
    message.reply(`The bot status has been updated to **${args[1]}**!`)
}

module.exports.help = {
    name: "setstatus"
}
