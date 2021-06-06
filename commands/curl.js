const axios = require('axios');
const Discord = require('discord.js');

module.exports = {

  name: 'curl',
  description: "This command will return the status code, status message, and response body from any URL you send into it. Just like doing *curl google.com* in node. Please note that you do not need to input 'https://' before your URL.",

  async execute(message,args) {
    
    let url = 'https://' + args[0];

    try {
      const response = await axios.get(url);
      let responseHeaders = response.headers;
      let resArray = [];
      
      // turning the object {key:value} pairs into an array of strings
      for (let key in responseHeaders) {
        resArray.push("**"+ key + "**" + ": " + responseHeaders[key]);
      };

      let firstMessage = new Discord.MessageEmbed()
      .setTitle(response.status + " " + response.statusText)
      .setAuthor(url)
      .setColor('0AFFED')
      .setThumbnail('https://i.imgur.com/WK6kd0K.png')
      .setDescription(resArray);

      await message.channel.send(firstMessage);

      // turn response body into a string
      let secondMessage = JSON.stringify(response.data);

      //will return the first 500 characters in a code block in Discord chat
      await message.channel.send("```"  + secondMessage.slice(0, 500) + "```");
    } catch(error) {
      //handling if there is an error
      return message.reply("there was an error in your GET request! Please input a proper URL without 'https://' as I will handle that for you!");
    };

    
  }
  
}