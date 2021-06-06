module.exports = {

  name: 'clear',
  description: "This command will delete your message from the channel",
  aliases: ['delete', 'x'],

  execute(message,args){
    
    message.channel.delete();
      
  }
  
}