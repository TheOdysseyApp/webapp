import Navbar from "../../components/navbar/Navbar";
import ItinerariesList from "../../components/itineraries-list/ItinerariesList";
import TravelerInfo from "../../components/traveler-info/TravelerInfo";

import { useState } from 'react';

import {
    Grid
  } from "@aws-amplify/ui-react";

function Homepage({ items, signOut }) {
    // Used in Navbar and TravelerInfo to render correct user
    const [currentTraveler, setCurrentTraveler] = useState(null)

    return (
        <Grid
        templateColumns="1.4fr 4fr"
        templateRows="55px 6fr"
        height="100vh"
        width="100wh"
      >
        <Navbar signOut={signOut}/>
        <ItinerariesList items={items} currentTraveler={currentTraveler} setCurrentTraveler={setCurrentTraveler}/>
        <TravelerInfo currentTraveler={currentTraveler}/>
        
      </Grid>
    )
}

export default Homepage;