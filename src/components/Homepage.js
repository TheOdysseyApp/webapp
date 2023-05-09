import Navbar from "./navbar/Navbar";
import ItinerariesList from "./itineraries-list/ItinerariesList";
import TravelerInfo from "./traverler-info/TravelerInfo";
import Confirmation from "./confirmation/Confirmation";

import { useState } from 'react';

import {
    Grid
  } from "@aws-amplify/ui-react";

function Homepage({ items, signOut }) {
  // Used in Navbar and TravelerInfo to render correct user
  const [currentTraveler, setCurrentTraveler] = useState(null);
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
      <ItinerariesList items={items} currentTraveler={currentTraveler} setCurrentTraveler={setCurrentTraveler} resetStage={() => resetStage()}/>
      {
        {
          0: <TravelerInfo currentTraveler={currentTraveler} forwardStage={() => forwardStage()}/>,
          1: <Confirmation/>
        } [plannerStage]
      }
    </Grid>
  )
}

export default Homepage;