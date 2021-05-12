module.exports = {

  name: 'server',
  description: "This returns the name of the server",
  
  execute(message,args){
    
    message.channel.send(`${message.author}, this server's name is: ${message.guild.name}`);
      
  }
  
}