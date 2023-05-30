import { unmarshall } from "@aws-sdk/util-dynamodb";

export const fetchTravelerPreviews = async () => {
    try {
        const response = await fetch('https://jv5lg0evra.execute-api.us-west-2.amazonaws.com/test/traveler-preview');
        if (!response.ok) {
        throw new Error();
        }
        const json = await response.json();
        // Converting dates from strings into json date representation 
        const datedResponse = JSON.parse(json).map((preview) => {
            return {
                ...preview,
                date: new Date(preview.date)
            }
        })
        const sortedItems = datedResponse.sort((a, b) => new Date(a.date) - new Date(b.date))
        return sortedItems
    } catch (error) {
        throw new Error('Error fetching data:', error);
    }
};

export const fetchItineraries = async (currentTripId) => {
    try {
        const response = await fetch(`https://akdbneuz4d.execute-api.us-west-2.amazonaws.com/trip/${currentTripId}`);
        if (!response.ok) {
            throw new Error('Error fetching data');
        }
        const json = await response.json();
        if (json.Item == null) {
            return {}
        }
        return unmarshall(json.Item)
    } catch (error) {
        console.error(error);
    }
}

export const createItinerary = async(tripDetails) => {
    try {
        const response = await fetch(
            "URL GOES HERE",
            {headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "POST",
            body: JSON.stringify(tripDetails)
        });
        if (!response.ok) {
            throw new Error('Error submitting data');
        }
        return response;
    } catch (error) {
        console.error(error);
    }
}