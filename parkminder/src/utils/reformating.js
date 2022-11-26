/* 
This file is used for reformatting data. 
Reformatting may be necessary to make the data more user readable 
or to meet the formatting requirements of the email microservice
*/

async function reformatDate(date, time) {
    const full_time = time + ":00"
    const date_time = date + " " + full_time
    return date_time;
    
}

async function reformatName(first_name, last_name) {
    const full_name = first_name + ' ' + last_name
    return full_name;
}

async function reformatCleanTimes(start_time, end_time) {
    let temp_start_time = parseInt(start_time)
    let temp_end_time = parseInt(end_time)
    let start_meridian = 'AM'
    let end_meridian = 'PM'

    if (temp_start_time === 0) {
        temp_start_time = 12
    } else if (temp_start_time > 12) {
        temp_start_time = start_time - 12
        start_meridian = 'PM'
    }

    if (temp_end_time > 12) {
        temp_end_time = end_time - 12
        end_meridian = 'PM'
    }

    const converted_time = temp_start_time + start_meridian + " - " + temp_end_time + end_meridian
    return converted_time
}

export { reformatDate, reformatName, reformatCleanTimes } 
