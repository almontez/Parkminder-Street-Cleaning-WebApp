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

// POST Route for calling email microservice
app.post('/email-micros', function(req, res) {
    const data = [req.body];    // email microservice needs JSON in an array
    console.log("Received the following from Parkminder: " + JSON.stringify(data));

    // Send POST request to email microservice
    request.post({ url: 'http://localhost:3356/api/send/users', body: data, json: true }, 
    function(error, response, body) {
        console.log(`${response.statusCode} - ${body}`);
        res.sendStatus(response.statusCode)
    });
});

app.listen(PORT, () => {
    console.log("Web server listening on port " + PORT)
});