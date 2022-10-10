const express = require("express")
const app     = express()
const cors    = require("cors")

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get("/", function(req, res) {
    res.send("It's Working!")
})

app.listen(3000, () => {
    console.log("app listening on port 3000")
})