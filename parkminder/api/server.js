const express = require("express");
const app     = express();
const cors    = require("cors");
const request = require("request");
const PORT    = 6958;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get("/", function(req, res) {
    res.send("It's Working!")
});

app.post('/email-micros', function(req, res) {
    const data = [
        {  "id" : 1,
           "name" : "Lauren",
           "email" : "grahaml@oregonstate.edu",
           "date" : "2022-11-1 11:53:59"
        },
        {   
            "id" : 2,
            "name" : "Susy",
            "email" : "graham@oregonstate.edu",
            "date" : "2022-11-1 16:14:59"
        },  
        {   
            "id" : 3,
            "name" : "Angela",
            "email" : "angelali.montez@gmail.com",
            "date" : "2022-11-10 10:18:00"
        },
        {   
            "id" : 4,
            "name" : "Angela",
            "email" : "monteza@oregonstate.edu",
            "date" : "2022-11-10 10:18:00"
        }
    ]
    console.log("Received the following JSON from parkminder form")
    console.log(JSON.stringify(data));

    request.post({ url: 'http://localhost:3356/api/send/users', body: data, json: true }, 
    function(error, response, body) {
        console.log(`${response.statusCode} - ${body}`);
    });
});

app.listen(PORT, () => {
    console.log("Web server listening on port " + PORT)
});