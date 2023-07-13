// import Navbar from "../../components/Navbar/Navbar";
import Navbar from '../../components/navbar/Navbar'
import ItinerariesList from '../../components/itinerariesList/ItinerariesList';
import CompareTrips from "./stages/compareTrips/CompareTrips";
import Confirmation from "./stages/confirmation/Confirmation";
import EditTrip from "./stages/editTrip/EditTrip";
import Review from "./stages/reviewTrip/ReviewTrip"

import { fetchItineraries, fetchTravelerPreviews } from "../../api";
import React, { useEffect, useState } from 'react';
import { Grid } from "@aws-amplify/ui-react";

export default function Homepage({ signOut }) {
    // Previews are small blocks of information that are generated per trip stored
    // in the itinerary_staging dynamodb
    const [previews, setPreviews] = useState(null);
    const [completedPreviews, setCompletedPreviews] = useState(null);

    // Used in CompareTrips to render correct trip
    const [currentTripId, setCurrentTripId] = useState(null);

    // This state is set in CompareTrips, and used in Trip details
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
        window.scrollTo(0, 0);
    }
    const backStage = () => {
        setPlannerStage(plannerStage - 1);
        window.scrollTo(0, 0);
    }
    const resetStage = () => {
        setPlannerStage(0);
        window.scrollTo(0, 0);
    }

    function isTripCompleted() {
        if (completedPreviews) {
            const found = completedPreviews.find(p => p.tripId === currentTripId);
            return true ? found !== undefined : false;
        }
    }

    // Fetches previews on page mount
    useEffect(() => {
        fetchTravelerPreviews().then((r) => {
            setPreviews(r.filter((p) => !p.completed));
            setCompletedPreviews(r.filter((p) => p.completed));
        })
    }, []);

    // Refetch itinerary data whenever currentTravelerId changes
    useEffect(() => {
        if (currentTripId != null) {
            setCurrentTrip("loading");
            fetchItineraries(currentTripId).then((r) => {
                const { A, B, C, ...traveler } = r

                // unmarshalling activites manually because unmarshall in api.js doesn't
                // unmarshall this for some reason.
                traveler.activities = traveler.activities?.map(item => item.S) ?? ["Not provided"];

                setCurrentTraveler(traveler)

                // TEMPORARY FIX FOR STAYS/HOTELS/EXPERIENCES BEING SINGLE OBJECTS AND NOT LISTS
                // converts each of the above fields to lists if they are not lists already
                // once traveler api is updated to have these set as lists, then we can remove
                // this
                const trips = [r.A, r.B, r.C]
                trips.forEach((item) => {
                    if (!Array.isArray(item.experiences)) {
                        item.experiences = [item.experiences]
                    }
                    if (!Array.isArray(item.stay)) {
                        item.stay = [item.stay]
                    }
                    if (!Array.isArray(item.workspaces)) {
                        item.workspaces = [item.workspaces]
                    }
                })
                // END TEMP FIX

                setCurrentTrip(r);
            })
        }
    }, [currentTripId])

    useEffect(() => {
        if (plannerStage === 3) {
            const newCompleted = previews.filter(p => p.tripId !== currentTripId);
            setPreviews(newCompleted);
            setCompletedPreviews([...completedPreviews, previews.find(p => p.tripId === currentTripId)]);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [plannerStage])

    return (
        <Grid
            templateColumns="1.4fr 4fr"
            templateRows="55px 6fr"
            height="100vh"
            width="100wh"
            >
            <Navbar signOut={signOut} />
            <ItinerariesList previews={previews} completedPreviews={completedPreviews} currentTripId={currentTripId} setCurrentTripId={setCurrentTripId} resetStage={() => resetStage()} />
            {
                {
                    0: <CompareTrips
                        currentTripId={currentTripId}
                        traveler={currentTraveler}
                        trip={currentTrip}
                        setCurrentDestination={setCurrentDestination}
                        completed={isTripCompleted()}
                        forwardStage={() => forwardStage()}
                    />,
                    1: <EditTrip
                        traveler={currentTraveler}
                        trip={currentTrip}
                        destination={currentDestination}
                        setCurrentDestination={setCurrentDestination}
                        forwardStage={() => forwardStage()}
                        backStage={() => backStage()}
                    />,
                    2: <Review
                        traveler={currentTraveler}
                        destination={currentDestination}
                        forwardStage={() => forwardStage()}
                        backStage={() => backStage()}
                    />,
                    3: <Confirmation
                        traveler={currentTraveler}
                        destination={currentDestination}
                    />
                }[plannerStage]
            }
        </Grid>
    )
}