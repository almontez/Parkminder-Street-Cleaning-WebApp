// Import packages
const express = require('express')
const schedule = require('node-schedule');

// App
const app = express()

app.use(express.json())


app.post('/api/send/users', async function(req, res) {
    const users = req.body;
    console.log(users)

    await users.forEach(async(user_data) => {
      schedule.scheduleJob(user_data.date, async() => {
        const sgMail = require('@sendgrid/mail')
        sgMail.setApiKey(process.env.SENDGRID_API_KEY)
        const msg = {
            template_id: 'd-2a239b889605432e810f1ad55467f1ef',
            to: user_data["email"], // Change to your recipient
            from: 'ParkminderSF@gmail.com', // Change to your verified sender
            subject: 'Sending with SendGrid is Fun!!!',
            text: 'and easy to do anywhere, even with Node.js',
            html: '<strong>and easy to do anywhere, even with Node.js</strong>',
        }
        try { 
            const something = await sgMail.send(msg)
            .then(() => {
                console.log('Email sent')
        })
        } catch(e) {
          console.log(e)
        }
      })
    })
    res.end('mailed');
});

const server = app.listen(3000);



// First route
//app.get('/', (req, res) => {
//    res.json({ message: 'Hello world' })
//})
