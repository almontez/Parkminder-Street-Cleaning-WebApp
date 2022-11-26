/* 
This file is used for extracting and reformatting the street cleaning data.
Reformatting may be necessary to make the data more user readable
*/

async function getStreetName(data) {
    return data[0].properties.corridor
}

async function getStreetLimits(data) {
    return data[0].properties.limits
}

/*
Comment Date: 11/16/2022
Mapbox merges data for the left and right side of the street into a single line.
To display accurate data to the user, the data must be split for further processing.
*/
async function separateStreetSides(data) {
    const arrayLength = data.length;
    const left_arr = [];
    const right_arr = [];

    for (let i=0; i < arrayLength; i++) {
        const side_of_street = data[i].properties.cnnrightleft
        if (side_of_street === 'L') {
            left_arr.push(data[i])
        } else {
            right_arr.push(data[i])
        }
    }

    return {
        'left_arr': left_arr,
        'right_arr': right_arr
    };
}

// Process data for the left and right side of street 
async function cleanStreetSides(side_arr) {
    const arrLen = side_arr.length;
    let cleanedData = side_arr[0].properties.fullname

    if (arrLen > 1) {
        cleanedData = consolidateDays(side_arr)    
    }
    
    return {
        'side_of_street': side_arr[0].properties.cnnrightleft,
        'start_time': side_arr[0].properties.fromhour,
        'end_time': side_arr[0].properties.tohour,
        'block_side': side_arr[0].properties.blockside,
        'clean_days': cleanedData   // promise returned
    }
}

/*
Comment Date: 11/16/2022
Some streets are cleaned on multiple days.
This function merges all days into a single string.
*/
async function consolidateDays(arr_data) {
    const arrLen = arr_data.length;
    const days = []

    for (let i=0; i<arrLen; i++) {
        const day = arr_data[i].properties.weekday

        if (day !== 'Holiday' && !days.includes(day)) {
            days.push(day)
        }
    }

    const total_days = sortByDay(days)
        .then((result) => joinDays(result))
        .then((result) => { return result })
    
    return total_days // Promise returned 
}

/*
Code Citation
Date: 11/16/2022
Article Title: "Sorting objects according to days name JavaScript"
Source URL: https://www.tutorialspoint.com/sorting-objects-according-to-days-name-javascript
*/
async function sortByDay(days) {
    const map = {
        "Mon": 1,
        "Tues": 2,
        "Wed": 3,
        "Thu": 4,
        "Fri": 5,
        "Sat": 6,
        "Sun": 7
    }

     // Promise Returned
    return days.sort((a, b) => { return map[a] - map[b] });  
}

async function joinDays(result) {
    // Promise Returned
    return result.join(' & ')
}


export { separateStreetSides, getStreetName, getStreetLimits, cleanStreetSides }