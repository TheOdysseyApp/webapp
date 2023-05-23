import Navbar from "../../components/navbar/Navbar";
import ItinerariesList from "../../components/itineraries-list/ItinerariesList";
import TravelerInfo from "../../components/traverler-info/TravelerInfo";
import Confirmation from "../../components/confirmation/Confirmation";
import TripDetails from "../../components/trip-details/TripDetails";
import Review from "../../components/review/Review"

import { fetchItineraries, fetchTravelerPreviews } from "../../api";
import React, { useEffect, useState } from 'react';
import { Grid } from "@aws-amplify/ui-react";

function Homepage({ signOut }) {
    // Previews are small blocks of information that are generated per trip stored
    // in the itinerary_staging dynamodb
    const [previews, setPreviews] = useState(null);

    // Used in Navbar and TravelerInfo to render correct trip
    const [currentTripId, setCurrentTripId] = useState(null);

    // This state is set in TravelerInfo, and used in Trip details
    // For clarification, Odyssey users can have multiple trips, each trip will
    // have multiple destinations generated (hence the different variables)
    const [currentTrip, setCurrentTrip] = useState(null);
    const [currentDestination, setCurrentDestination] = useState(null);

    const [currentTraveler, setCurrentTraveler] = useState(null);

    
    // This state and the functions that follow control which component is rendered 
    // as the main content of the page. The component that is rendered is assigned
    // an integer that represents the order of the "flow" of the components.
    // This assignment is set in the return statement of this component
    const [plannerStage, setPlannerStage] = useState(0);
    const forwardStage = () => {
        setPlannerStage(plannerStage + 1);
    }
    const backStage = () => {
        setPlannerStage(plannerStage - 1);
    }
    const resetStage = () => {
        setPlannerStage(0);
    }
    
    // Fetches previews on page mount
    useEffect(() => {
        fetchTravelerPreviews().then((r) => {
            setPreviews(r);
        })
    }, []);

    // Refetch itinerary data whenever currentTravelerId changes
    useEffect(() => {
        if (currentTripId != null) {
            fetchItineraries(currentTripId).then((r) => {
                // the response r contains some identifying information and then
                // 3 different itineraries. We're extracting the travelers information
                // since it will be used in multiple places
                const { first_name, last_name, id: tripId, userID: userId } = r
                const traveler = { first_name, last_name,  tripId, userId }
                console.log(traveler)
                setCurrentTrip(r);
            })
        }
    }, [currentTripId])

    return (
        <Grid
        templateColumns="1.4fr 4fr"
        templateRows="55px 6fr"
        height="100vh"
        width="100wh"
        >
        <Navbar signOut={signOut}/>
        <ItinerariesList previews={previews} currentTripId={currentTripId} setCurrentTripId={setCurrentTripId} resetStage={() => resetStage()}/>
        {
            {
            0: <TravelerInfo trip={currentTrip} setCurrentDestination={setCurrentDestination} forwardStage={() => forwardStage()}/>,
            1: <TripDetails trip={currentTrip} destination={currentDestination} setCurrentTrip={setCurrentTrip} forwardStage={() => forwardStage()} backStage={() => backStage()}/>,
            2: <Review trip={currentTrip} destination={currentDestination} forwardStage={() => forwardStage()} backStage={() => backStage()}/>,
            3: <Confirmation />
            }[plannerStage]
        }
        </Grid> 
    )
}

export default Homepage;