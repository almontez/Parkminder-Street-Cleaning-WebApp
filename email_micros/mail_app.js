// Followed tutorial here: https://www.youtube.com/watch?v=nRwbp2QVj5Y 
const nodemailer = require('nodemailer');
const cron = require('node-cron');

// email message options

const mailOptions = {
    from: 'ParkminderSF@gmail.com',
    to: 'grahaml@oregonstate.edu',
    subject: 'Reminder: scheduled street cleaning',
    text: 'This is a reminder from Parkminder. The area in which you have parked your car is scheduled to be cleaned in the next 30 minutes.'

};

// email transport configuration
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ParkminderSF@gmail.com',
        pass: 'lonmdhrnpjxnynor'
    }
});

// send email
//cron.schedule('* * * * * ', () => {
//    transporter.sendMail(mailOptions, (error, info) => {
//        if(error) {
 //           console.log(error);
 //       } else {
 //           console.log('Email send: ' + info.response);
 //       }
 //   });
//})

// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs
const sgMail = require('@sendgrid/mail')
sgMail.setApiKey(process.env.SENDGRID_API_KEY)
const msg = {
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

  