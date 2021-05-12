const Discord = require('discord.js');

module.exports = {

  name: 'pin',
  description: "This command will pin your message to the channel",

  execute: async (message,args) => {
    
    await message.pin();
  }
  
}