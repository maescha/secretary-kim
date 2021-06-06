module.exports = {

  name: 'clear',
  description: "This command will delete a user determined number of message(s) from the channel between 1-100",
  aliases: ['delete', 'x'],

  execute(message,args){

    let messageNum = args[0];

    if (!messageNum) return message.reply("please enter the amount of messages you want to clear!");
    if (isNaN(messageNum)) return message.reply("please enter a real number!");

    if(messageNum > 100) return message.reply("you can't delete more than 100 messages");
    if(messageNum < 1) return message.reply("you must delete at least one message!")
  }
  
}