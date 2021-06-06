const axios = require('axios');
const Discord = require('discord.js');

module.exports = {

  name: 'curl',
  description: "This command will return the status code, status message, and response body from any URL you send into it. Just like doing *curl google.com* in node",
  //test with https://api.namefake.com/

  async execute(message,args) {
    
    let url = 'https://' + args[0];
    const response = await axios.get(url) ;

    let responseHeaders = response.headers;
    let resArray = [];

    for (let key in responseHeaders) {
      resArray.push("**"+ key + "**" + ": " + responseHeaders[key]);
    };

    let firstMessage = new Discord.MessageEmbed()
    .setTitle(response.status + " " + response.statusText)
    .setAuthor(url)
    .setDescription(resArray);

    await message.channel.send(firstMessage);

    let secondMessage = JSON.stringify(response.data);

    await message.channel.send("```"  + secondMessage.slice(0, 500) + "```");
  }
  
}