import * as processData from '../utils/datautils.js'

export async function cleanData(data) {
    // Data same for left and right side of street
    const streetName = await processData.getStreetName(data);
    const boarders = await processData.getStreetLimits(data);
   
    // Data must be processed based on left and right side of street
    const streetSides = await processData.separateStreetSides(data);
    const clean_left = await processData.cleanStreetSides(streetSides.left_arr)
    const clean_right = await processData.cleanStreetSides(streetSides.right_arr)

    return {
        'streetName': streetName,
        'streetLimits': boarders,
        'leftSideData': clean_left,
        'rightSideData': clean_right,
    }
};