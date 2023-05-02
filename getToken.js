var request = require('request');

 const getToken = new Promise((resolve, reject) => {
  var options = {
    'method': 'POST',
    'url': 'https://www.ulip.dpiit.gov.in/ulip/v1.0.0/user/login',
    'headers': {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      "username": "truckrr_usr",
      "password": "truckrr@10042023"
    })
  
  };
  request(options, async function (error, response) {
    if (error) throw new Error(error);
    var body = await JSON.parse(response.body);
    resolve(body.response.id)
  });
});

module.exports =  getToken.then((value)=>value);