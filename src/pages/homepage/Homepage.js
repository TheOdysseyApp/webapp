import Navbar from "../../components/navbar/Navbar";
import ItinerariesList from "../../components/itineraries-list/ItinerariesList";
import TravelerInfo from "../../components/traverler-info/TravelerInfo";
import Confirmation from "../../components/confirmation/Confirmation";
import TripDetails from "../../components/trip-details/TripDetails";

import { useEffect, useState } from 'react';

import { Grid } from "@aws-amplify/ui-react";

import { fetchTravelerPreviews, fetchTravelerInfo } from "../../api";


function Homepage({ signOut }) {
  const [previews, setPreviews] = useState(null);

  // Used in Navbar and TravelerInfo to render correct user
  const [currentTravelerId, setCurrentTravelerId] = useState(null);

  // This state is set in TravelerInfo, and used in Trip details
  const [currentTrip, setCurrentTrip] = useState(null);
  const [plannerStage, setPlannerStage] = useState(0);
  
  const [currentTraveler, setCurrentTraveler] = useState(null)

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
    const fetchPreviews = async () => {
      try {
        const response = await fetchTravelerPreviews();

        // Converting dates from strings into json date representation 
        const datedResponse = JSON.parse(response).map((preview) => {
          return {
            ...preview,
            date: new Date(preview.date)
          }
        })

        const sortedItems = datedResponse.sort((a, b) => new Date(a.date) - new Date(b.date))

        setPreviews(sortedItems);
      } catch (error) {
        console.error('Error fetching previews:', error);
      }
    };

    fetchPreviews();
  }, []);

  // Refetch itinerary data whenever currentTravelerId changes
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(`https://ggiilu9oe9.execute-api.us-west-2.amazonaws.com/work/${currentTravelerId}`);
        const data = await response.json();

        setCurrentTraveler(data.Item)
      } catch (error) {
        console.error(error);
      }
    }

    // Call the fetchData function whenever the ID changes
    fetchData();
  }, [currentTravelerId])

  return (
    <Grid
      templateColumns="1.4fr 4fr"
      templateRows="55px 6fr"
      height="100vh"
      width="100wh"
    >
      <Navbar signOut={signOut}/>
      <ItinerariesList previews={previews} currentTravelerId={currentTravelerId} setCurrentTravelerId={setCurrentTravelerId} resetStage={() => resetStage()}/>
      {
        {
          0: <TravelerInfo currentTraveler={currentTraveler} setCurrentTrip={setCurrentTrip} forwardStage={() => forwardStage()}/>,
          1: <TripDetails currentTraveler={currentTraveler} currentTrip={currentTrip} backStage={() => backStage()}/>,
          2: <Confirmation />
        }[plannerStage]
      }
    </Grid> 
  )
}

export default Homepage;