
const request = require('request');
const userData = require('./users.json');

request.post({ url: 'http://localhost:3356/api/send/users', body: userData, json: true}, function(error, response, body){
    console.log(`${response.statusCode} - ${body}`);
});

