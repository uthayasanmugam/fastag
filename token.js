var request = require('request');
var token = require('./getToken')
const getToken = ( )=>{
    let token
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
    request(options,async function (error, response) {
        if (error) throw new Error(error);
        var body = await JSON.parse(response.body);
        console.log("body",body.response.id)
        var options1 = {
          'method': 'POST',
          'url': 'https://www.ulip.dpiit.gov.in/ulip/v1.0.0/FASTAG/01',
          'headers': {
            'Authorization':'Bearer'+ ' ' + body.response.id,
            // 'Authorization': 'Bearer' + id,
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            "vehiclenumber": "TN04BA1599"
          })
        
        };
         request(options1, function (error, response) {
          if (error) throw new Error(error);
          console.log(response.body);
        });
      })
     ;
     return token 
}
getToken();