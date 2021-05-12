const Discord = require('discord.js');

module.exports = {

  name: 'help', 
  description: "This is the full table of contents of bot commands",
  aliases: ['commands','command', 'h'],

  execute(message,args) {

    //accesses all of the commands from the Discord client
    const commands = message.client.commands;

    //get each command and description from commands and pushes it into
    //the commandsList array
    commands.forEach((val, key) => {
      commandsList.push(`**!${key}** \n${val.description}`);

      //checking for if aliases are set for each pushed command and if so,
      //push the aliases
      if (`${val.aliases}` === "undefined") {
        commandsList.push(`\n\n`);
      } else {
        commandsList.push(`\n> Can also be called by: ${val.aliases}\n\n`);
      };
    });


    
    let embed = new Discord.MessageEmbed()
    .setTitle('Secretary Kim can do the following:')
    .setColor('5FCAFF') // #5FCAFF
    .setThumbnail('https://i.imgur.com/fEIgVgo.png')
    //adding .join here will take out the commas after each object
    .setDescription(`${commandsList.join('')}`) 


    message.channel.send(embed);
      
  }
  
}

//empty array to put all the commands into
var commandsList = [];

