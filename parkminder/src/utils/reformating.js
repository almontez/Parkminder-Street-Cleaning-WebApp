{/* This file is used for reformatting data. 
    Reformatting may be necessary to make the data more user readable 
    or to meet the formatting requirements of the email microservice
*/}

async function reformatDate(date, time) {
    const full_time = time + ":00"
    const date_time = date + " " + full_time
    return date_time;
    
}

async function reformatName(first_name, last_name) {
    const full_name = first_name + ' ' + last_name
    return full_name;
}

export { reformatDate, reformatName } 
