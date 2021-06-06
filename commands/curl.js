const axios = require('axios');

module.exports = {

  name: 'curl',
  description: "This command will return the status code, response header, and response body from any URL you send into it. Just like doing ```curl google.com``` in node",

  execute(message,args){
    
    message.channel.send('pong!');
      
  }
  
}