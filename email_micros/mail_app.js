//user_data. object retrieval in JS in objectName.keyName or objectName["keyName"]
let users = [
    {"name" : "mahesh", "email" : "grahaml@oregonstate.edu", "date" : '2022-10-29 13:58:59'},
    {"name" : "suresh", "email" : "lagraham337@gmail.com", "date" : '2022-10-29 13:58:59'},
    {"name" : "ramesh", "email" : "laurengrahamslp@gmail.com", "date" : '2022-10-29 13:58:59'}
 ]


//node-schedule
const schedule = require('node-schedule');

users.forEach(async(user_data) => {
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


// get date and time right now in JS, if needed:

//var today = new Date();
//var date2 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date2+' '+time;
//console.log(dateTime)
