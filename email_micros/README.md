# Email Notification Job Scheduling Microservice



## Purpose 
This microservice receives JSON data from a backend. The JSON data contains name, email address, and time the user wishes to receive the email.

The microservice has the ability to receive multiple user profiles and schedule multiple jobs at one time. 

## Pipe
Rest API

## Quick Start
Some extraneous files (test.js [a substitute for a backend which would communicate with the microservice] and users.json) were included for testing purposes. We use them to quickly see the microservice in action and get a feel for the use of the microservice:

1. Update users.json dates to be in the near future. 
2. Update users.json email addresses if you would like to view the email in one of your inboxes. 
3. In the folder email_micros:
`npm run start` and 
`npm run test`

4. The status code received from my microservice should be 200, and the response body should be "Notifications scheduled." 

If the dates and emails were formatted correctly, emails will be received at the appropriate times to the appropriate email addresses. 


## Files
Files are contained inside one folder called email_micros.
### users.JSON
This is a file used for testing purposes and contains data in the format it should be received. Example format for JSON data:

```
[
    {  "id" : 1,
       "name" : "Lauren",
       "email" : "grahaml@oregonstate.edu",
       "date" : "2022-10-29 16:14:59"
    },
    {   
        "id" : 2,
        "name" : "Susy",
        "email" : "test@test.com",
        "date" : "2022-10-29 16:14:59"
    }
]
```
*When testing using this data, the date value must be amended to a future time.*

### test.js
This file was built so that an example request could be viewed and the use of the microservice could be easily demonstrated. It is essentially a substitute for the back-end of the application which would be communicating with the email job scheduling microservice. 

A file which is calling this microservice may use request, [an npm package](https://www.npmjs.com/package/request), which can be installed using the command `npm i request`. 

The file serves as an example call to the microservice. 

```
const request = require('request');
const userData = require('./users.json');

request.post({ url: 'http://localhost:3000/api/send/users', body: userData, json: true}, function(error, response, body){
    console.log(`${response.statusCode} - ${body}`);
});

```

### sendgrid.env
This contains the API key for use with Sendgrid for sending emails. This file should not be changed.

### index.js

This is the microservice application, powered by Express. A package called node-schedule is used to schedule jobs. 


## Using Postman API as an alternative to see the microservice in action

One could visit [Postman](https://web.postman.co/) to test the microservice by making a post request. 
1. Click *send a request*.
2. Choose *post* as the request type.
3. Paste `localhost:3000/api/send/users` into the URL input area. 
4. Under this, choose *body*, and then *raw*. 
5. Paste JSON user data into the field.
6. Go back to your IDE, and in the terminal within the email_micros folder, use `npm run dev`.
7. Go back to Postman, and click *Send*.

View the request body, response body, etc. in the console on Postman. The response body will say `Notifications Scheduled`. 


## UML Sequence Diagram

