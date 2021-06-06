const Discord = require('discord.js');

module.exports = {
  
  name: 'poll',
  description: "This makes a simple agree or disagree poll",
  aliases: ['q', 'p', 'question'],

  async execute(message,args) {
      
    let pollTitle = args.join(' ');

    let embedPoll = new Discord.MessageEmbed()
    .setTitle(pollTitle)
    .setColor('d1b01b')
    .setThumbnail('https://i.imgur.com/Oi0n1WO.gif')
    .setFooter('I, Secretary Kim, have voted once in both choices.') 
    .setAuthor(`${message.author.username} has started a poll!`);

    //will delete the user's !poll (poll question) message from the channel
    await message.channel.messages.fetch({limit: 1}).then(messages => {
      message.channel.bulkDelete(messages);
    });

    // bot will create new poll with question as pollTitle
    let msg = await message.channel.send(embedPoll);
    await msg.react("👍");
    await msg.react("👎");
    
  }
} 