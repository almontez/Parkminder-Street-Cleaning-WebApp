# Parkminder: Street Cleaning Reminder

## Table of Contents
1. [Description](#Description)
2. [Video Demo](#Demo)
3. [Product Spec](#Product-Spec)

## Description
**Parkmimder: Street Cleaning SF** is a single page web application that lets users create and send reminders to move their car during designated street cleaning times in San Francisco, CA.

### App Evaluation
- **Category:** Reminder/Productivity
- **Type:** Web application
- **Story:** Parkminder is for the busy and forgetful because parking in San Francisco is difficult enough without the fear of being ticketed $85 for forgetting to move a parked vehicle during a street cleaning period. 
- **Market:** San Francisco residents who own vehicles that must be parked on the street.
- **Habit:** Parkminder is meant for weekly use after a user has moved their vehicle to a new parking location.
- **Scope:** Parkminder consists of three pages: About, Get Started, and FAQs. The primary feature of the application is located on the Get Started Page. Users can search an embedded map for street cleaning data. Then use the reminder form to schedule emailed parking reminders. 
- **Tools & Technologies:** React, Mapbox, React-Bootstrap, DataSF (Socrata), Twilio sendgrid 

## Demo
https://user-images.githubusercontent.com/91339804/204406952-59a252d5-b44f-4a7d-9295-fb4876f2ebef.mp4

## Product Spec

### 1. User Stories 

**Required Must-have Stories**

* User can navigate to different "pages" on the site using a sticky navigation bar
* Users can search an embedded map for street cleaning information
* Users can fill out and submit a reminder form to move their vehicle
* Users will receive an email reminder on  day and time they designated on the reminder form


### 2. Screen Archetypes

* **Homepage:** Welcomes users to the website with a large hero bar including the title of the website. 
* **About:** Explains the motivations for the application and provides users with instructions for searching the map and creating a reminder
* **Get Started:** Search map for street cleaning data related to where you parked. Create a reminder to move a parked vehicle on a designated time and day.
* **FAQ:** Expands user knowledge by providing additional information about street cleaning policy and practices 

### 3. Navigation

**Flow Navigation**
* Home
* About
* Get Started
   * Map
   * Reminder Form
* FAQs
