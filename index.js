const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

for (const file of commandFiles){
  const command = require(`./commands/${file}`);

  // set a new item in the Collection
  // with the key as the command name and the value as the exported module
  client.commands.set(command.name, command);
}

// when the client is ready, run this code
// this event will only trigger one time after logging in
// to run type "node index.js" into the console or "just node ."
client.once('ready', () => {
  console.log('Secretary Kim is now online!');

  // the Playing/streaming/etc x activity under the bot thing
  client.user.setActivity('Made in China', { type: 'LISTENING' }).catch(console.error);
});

client.on('message', message => {
  if (!message.content.startsWith(prefix)) return;

  // so the entire line you send to the bot after the prefix can be read and passed
  const args = message.content.slice(prefix.length).trim().split(/ +/); 
  const commandName = args.shift().toLowerCase();

  const command = client.commands.get(commandName) || client.commands.find(cmd => cmd.aliases && cmd.aliases.includes(commandName));

  if (!command) {
    return message.reply('That is not a command. Please view !help for a full list of what I am capable of.')
  };

  try {
      command.execute(message, args);
  } catch (error) {
      console.error(error);
      message.reply('there was an error trying to execute that command! I am quitting out of spite. Dont call me back! (please do)');
  }  

});




// login into Discord with app's token hidden in the config.json folder
client.login(token);