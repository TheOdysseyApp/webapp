import Navbar from "./navbar/Navbar";
import ItinerariesList from "./itineraries-list/ItinerariesList";
import TravelerInfo from "./main/TravelerInfo";

import { useState } from 'react';

import {
    Grid
  } from "@aws-amplify/ui-react";

function Homepage({ items, signOut }) {
    // Used in Navbar and TravelerInfo to render correct user
    const [currentTraveler, setCurrentTraveler] = useState(null)

    return (
        <Grid
        templateColumns="1fr 4fr"
        templateRows="55px 6fr"
        height="100vh"
        width="100wh"
      >
        <Navbar signOut={signOut}/>
        <ItinerariesList items={items} setCurrentTraveler={setCurrentTraveler}/>
        <TravelerInfo currentTraveler={currentTraveler}/>
        
      </Grid>
    )
}

export default Homepage;