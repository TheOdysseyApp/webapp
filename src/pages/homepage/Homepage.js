import Navbar from "../../components/navbar/Navbar";
import ItinerariesList from "../../components/itineraries-list/ItinerariesList";
import TravelerInfo from "../../components/traverler-info/TravelerInfo";
import Confirmation from "../../components/confirmation/Confirmation";

import { useState } from 'react';

import {
    Grid
  } from "@aws-amplify/ui-react";

function Homepage({ previews, signOut }) {
  // Used in Navbar and TravelerInfo to render correct user
  const [currentTravelerId, setCurrentTravelerId] = useState(null);
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
          0: <TravelerInfo currentTravelerId={currentTravelerId} forwardStage={() => forwardStage()}/>,
          1: <Confirmation/>
        }[plannerStage]
      }
    </Grid> 
  )
}

export default Homepage;