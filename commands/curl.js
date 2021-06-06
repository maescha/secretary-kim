const axios = require('axios');

module.exports = {

  name: 'curl',
  description: "This command will return the status code, response header, and response body from any URL you send into it. Just like doing *curl google.com* in node",
  
  async execute(message,args) {
    
    try {
      const response = await axios.get('https://google.com');
      // headers are in the config object when you check the error
      console.log(response.config);
    } catch (error) {
      console.error("error");
    }

  }
  
}