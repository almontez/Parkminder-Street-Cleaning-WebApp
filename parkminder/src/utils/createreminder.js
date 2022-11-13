import * as reformatting from '../utils/reformating.js'

export async function createReminder(fname, lname, remindDate, remindTime, email) {
    // Reformat data to meet email_micros requirements
    const name = await reformatting.reformatName(fname, lname);
    const date = await reformatting.reformatDate(remindDate, remindTime);
    
    // Make post request to parkminder web server
    const newReminder = {name, email, date}
    const response = await fetch('http://localhost:6958/email-micros', {
        method: 'POST',
        body: JSON.stringify(newReminder),
        headers: {
            'Content-Type': 'application/json'
        },
    });
    
    if (response.status === 200) {
        alert("Sucessfully Created Reminder")
    } else {
        alert(response.status + " - Unable to Create Reminder")
    }
}