// Module responsible for fetching / posting data 
import temp1 from "./tempdata/itinerary_staging_example1.json"
import temp2 from "./tempdata/itinerary_staging_example2.json"
import temp3 from "./tempdata/itinerary_staging_example3.json"

function fetchStagingItems() {
    // temporarily pulling info from json files stored in project directory
    const items = [temp1, temp2, temp3] // should be replaced with dynamodb call

    // for each entry in staging, parse the id to retrieve the userId and tripId
    // then match each userId to their 3 tripIds respectively and return that
    // as a map. The map has the following structure:
    // userId1 -- 1 -- trip 1 data
    //         |
    //         -- 2 -- trip 2 data
    //         |
    //         -- 3 -- trip 3 data
    //
    // userId2 -- 1 -- trip 1 data
    //         |
    //         -- 2 -- trip 2 data
    //         |
    //         -- 3 -- trip 3 data
    // for example, if you wanted to retrieve trip 3 for userId2, you would
    // use userTripMap[userId2][3]
    
    const userTripMap = new Map()
    items.forEach((item) => {
        const { id, ...theRest } = item
        const [ userId, tripId ] = id.split("_")
        
        if (userTripMap.has(userId)) {
            userTripMap.get(userId).set(tripId, theRest)
        }
        else {
            // add user to the map
            const trips = new Map()
            trips.set(tripId, theRest)
            userTripMap.set(userId, trips)
        }
    })
    
    return userTripMap
}

export default fetchStagingItems;
