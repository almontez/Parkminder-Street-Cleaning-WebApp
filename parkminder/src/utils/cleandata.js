export async function cleanData(data) {
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

    console.log("This is left")
    console.log(left_arr);
    console.log("This is right")
    console.log(right_arr);

    const clean_left = await processLeftRight(left_arr);
    const clean_right = await processLeftRight(right_arr);

    const processedData = { StreetLeft: clean_left, StreetRight: clean_right }
    console.log(processedData);
    return processedData;
}

async function processLeftRight(arr) {
    const arrLen = arr.length;
    const days = [];

    const street_name = arr[0].properties.corridor;
    const start_time = arr[0].properties.fromhour;
    const end_time = arr[0].properties.tohour;
    const street_bounds = arr[0].processRight.limits;
    
    let clean_days = arr[0].properties.weekday;
    if (arrLen > 1) {
        for (let i=0; i < arrLen; i++) {
            const day = arr[i].properties.weekday;
            days.push(day)
        }
        clean_days = concatDays(days);
    }

    console.log("This is days");
    console.log(clean_days);

    const processedData = { StreetName: street_name, 
        StartTime: start_time, 
        EndTime: end_time, 
        StreetBoundary: street_bounds,
        ScheduledDays: clean_days }

    console.log("Here")
    console.log(processedData);
    return processedData;
}

async function concatDays(arr) {
    return arr.join(', ');
}