https://user-images.githubusercontent.com/91339804/204406952-59a252d5-b44f-4a7d-9295-fb4876f2ebef.mp4

Welcome to Parkmimder. Parkmimder is a single page web application that lets users create and send reminders to move their car during designated street cleaning times in San Francisco, CA. Parkmimder was conceptualize after I received an $85 parking ticket for forgetting to move my parked car during a street cleaning period. 

It’s built using React, Mapbox, React-Bootstrap, DataSF, and Twilio sendgrid for the email microservice. 

Notable features include -
- a sticky navbar
- about the application page with instructions 
- a searchable map with zoom functionalities 
- Pop ups that display street cleaning data
- a reminder form that connects to the email microservice 
- and a FAQ section with an accordion component. 

Using Parkinder is an easy process. You’ll start by finding the location of where you parked on the map. You’ll then click on the orange line and the cleaning data for that location will appear. If the data doesn’t instantly pop up, you should click the line again. You can then copy the relevant data into the reminder form or type it in as I’m doing here. Once you’re done, it’s as easy as clicking save. There you go! An email reminder is logged using sendgrid and will be sent to the input email at the specified date and time. No more $85 parking tickets. 

This project was developed for CS 361: Software Engineering I (Fall 2022)
