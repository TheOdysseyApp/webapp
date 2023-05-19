import Navbar from "../../components/navbar/Navbar";
import ItinerariesList from "../../components/itineraries-list/ItinerariesList";
import TravelerInfo from "../../components/traverler-info/TravelerInfo";
import Confirmation from "../../components/confirmation/Confirmation";
import TripDetails from "../../components/trip-details/TripDetails";

import { fetchItineraries } from "../../api";

import { useEffect, useState } from 'react';

import { Grid } from "@aws-amplify/ui-react";

import { fetchTravelerPreviews, fetchTravelerInfo } from "../../api";


function Homepage({ signOut }) {
    const [previews, setPreviews] = useState(null);

    // Used in Navbar and TravelerInfo to render correct user
    const [currentTripId, setCurrentTripId] = useState(null);

    // This state is set in TravelerInfo, and used in Trip details
    const [currentDestination, setCurrentDestination] = useState(null);
    const [plannerStage, setPlannerStage] = useState(0);
    const [currentTrip, setCurrentTrip] = useState(null);

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
            1: <TripDetails trip={currentTrip} destination={currentDestination} backStage={() => backStage()}/>,
            2: <Confirmation />
            }[plannerStage]
        }
        </Grid> 
    )
}

export default Homepage;