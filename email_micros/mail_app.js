//node-schedule
const schedule = require('node-schedule');
const date = new Date('2022-10-28 22:42:59');

//email job
const job = schedule.scheduleJob(date, function(){
    const sgMail = require('@sendgrid/mail')
    sgMail.setApiKey(process.env.SENDGRID_API_KEY)
    const msg = {
    template_id: 'd-2a239b889605432e810f1ad55467f1ef',
        to: 'grahaml@oregonstate.edu', // Change to your recipient
        from: 'ParkminderSF@gmail.com', // Change to your verified sender
        subject: 'Sending with SendGrid is Fun!!!',
        text: 'and easy to do anywhere, even with Node.js',
        html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    }
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent')
        })
        .catch((error) => {
            console.error(error)
        })
});

// get date and time right now in JS, if needed:

//var today = new Date();
//var date2 = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
//var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
//var dateTime = date2+' '+time;
//console.log(dateTime)
