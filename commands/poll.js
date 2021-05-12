const Discord = require('discord.js');

module.exports = {

    name: 'poll',
    description: "This makes a simple agree or disagree poll",
    aliases: ['q', 'p', 'question'],

    execute: async (message,args) => {
      
      let pollTitle = args.join(' ');

      let embedPoll = new Discord.MessageEmbed()
      .setTitle(pollTitle)
      .setColor('d1b01b')
      .setThumbnail('https://i.imgur.com/Oi0n1WO.gif')
      .setFooter('I, Secretary Kim, have voted once in both choices.') 
      .setAuthor(`${message.author.username} has started a poll!`)

      let msg = await message.channel.send(embedPoll);
      await msg.react("👍");
      await msg.react("👎");
      
    }
} 