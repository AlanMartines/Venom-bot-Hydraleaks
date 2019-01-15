const Discord = require("discord.js");
const fs = require("fs");


module.exports.run = async (bot, message, args) => {

if(!message.member.hasPermission("ADMINISTRATOR")) return errors.noPerms(message, "You don't have access to turn this command!");

message.guild.createChannel(`logs`, "text")




message.guild.createChannel("ADMINISTRATION", "category").then(ch => {
/////
  message.guild.createChannel(`announcements`, "text").then(ch => {
  let category = message.guild.channels.find("name", "ADMINISTRATION");
  ch.setParent(category);
  })
  message.guild.createChannel(`updates`, "text").then(ch => {
  let category = message.guild.channels.find("name", "ADMINISTRATION");
  ch.setParent(category);
  })
  message.guild.createChannel(`welcome`, "text").then(ch => {
  let category = message.guild.channels.find("name", "ADMINISTRATION");
  ch.setParent(category);
  })
 });



message.guild.createChannel("MAIN", "category").then(ch => {
/////
  message.guild.createChannel(`main`, "text").then(ch => {
  let category = message.guild.channels.find("name", "MAIN");
  ch.setParent(category);
  })
  message.guild.createChannel(`bot-spam`, "text").then(ch => {
  let category = message.guild.channels.find("name", "MAIN");
  ch.setParent(category);
  })
  message.guild.createChannel(`suggestions`, "text").then(ch => {
  let category = message.guild.channels.find("name", "MAIN");
  ch.setParent(category);
  })
  message.guild.createChannel(`bug-reports`, "text").then(ch => {
  let category = message.guild.channels.find("name", "MAIN");
  ch.setParent(category);
  })
})


  let embed = new Discord.RichEmbed()
  .setColor("#1B55AA")
  .setThumbnail(bot.user.avatarURL)
  .setFooter("Corebot Alex & Diamond")
  .setAuthor("CoreBot Installtion Complete")
  .setDescription(`Thanks for installing corebot! \nThe Following Channels have been created \n \n**Administration** \n#announcements #updates #welcome \n**Main** \n#main #bot-spam #suggestions #bug-report \n \n**Installed by** \n${message.author} \n \nAny issues please contact us on our discord.`);
  message.channel.send(embed);



  message.channel.send(`✅**CoreBot** has been installed. Now all you need to do is setup the perms for each channel!`)

 };


module.exports.help = {
    name: "install"
}
