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
    const data = [req.body]
    console.log("Received the following JSON from parkminder form")
    console.log(data)

    request.post({ url: 'http://localhost:3356/api/send/users', body: data }, function(error, response, body) {
        console.log(`${response.statusCode} - ${body}`);
    });
});

app.listen(PORT, () => {
    console.log("Web server listening on port " + PORT)
});