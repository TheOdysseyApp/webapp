import Header from "./Header";
import Navbar from "./Navbar";

import { useState } from 'react';

import {
    Grid
  } from "@aws-amplify/ui-react";
import TravelerInfo from "./TravelerInfo";

function Homepage({ items, signOut }) {
    const [currentTraveler, setCurrentTraveler] = useState(null)

    const selectNewTraveler = (traveler) => {
      if (currentTraveler === traveler) {
        setCurrentTraveler(null)
      }
      else {
        setCurrentTraveler(traveler)
      }
    }

    return (
        <Grid
        templateColumns="0.5fr 2fr"
        templateRows="1fr 8fr"
        height="100vh"
        width="100wh"
      >
        <Header signOut={signOut}/>
        <Navbar items={items} selectNewTraveler={selectNewTraveler}/>
        <TravelerInfo currentTraveler={currentTraveler}/>
        
      </Grid>
    )
}

export default Homepage;