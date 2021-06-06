const axios = require('axios');

module.exports = {

  name: 'curl',
  description: "This command will return the status code, response header, and response body from any URL you send into it. Just like doing *curl google.com* in node",
  
  execute(message,args) {
    
    // Make a request for a user with a given url
    axios.get('http://google.com')
    .then(function (request) {
      // handle success
      //prints request headers into console
      console.log(request.config);
    })
    .catch(function (error) {
      // handle error
      console.log("error");
    })
    .then(function () {
      // always executed
    });

  }
  
}