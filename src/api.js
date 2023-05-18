// Module responsible for fetching / posting data 
import temp1 from "./tempdata/itinerary_staging_example1.json"
import temp2 from "./tempdata/itinerary_staging_example2.json"
import temp3 from "./tempdata/itinerary_staging_example3.json"
import temp4 from "./tempdata/itinerary_staging_example4.json"
import temp5 from "./tempdata/itinerary_staging_example5.json"
import temp6 from "./tempdata/itinerary_staging_example6.json"


export function fetchStagingItems() {
    // temporarily pulling info from json files stored in project directory
    const items = [temp1, temp2, temp3, temp4, temp5, temp6] // should be replaced with dynamodb call

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

export const fetchTravelerPreviews = async () => {
    try {
      const response = await fetch('https://jv5lg0evra.execute-api.us-west-2.amazonaws.com/test/traveler-preview');
      if (!response.ok) {
        throw new Error('Error fetching data');
      }

      return response.json();
    } catch (error) {
      throw new Error('Error fetching data:', error);
    }
  };

export function fetchTravelerInfo(id) {
    const userTripMap = fetchStagingItems()
    return userTripMap.get(id)
}
