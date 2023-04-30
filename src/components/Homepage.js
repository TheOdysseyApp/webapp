import Header from "./header/Header";
import Navbar from "./navbar/Navbar";

import { useState } from 'react';

import {
    Grid
  } from "@aws-amplify/ui-react";
import TravelerInfo from "./main/TravelerInfo";

function Homepage({ items, signOut }) {
    // Used in Navbar and TravelerInfo to render correct user
    const [currentTraveler, setCurrentTraveler] = useState(null)

    return (
        <Grid
        templateColumns="0.5fr 2fr"
        templateRows="1fr 8fr"
        height="100vh"
        width="100wh"
      >
        <Header signOut={signOut}/>
        <Navbar items={items} setCurrentTraveler={setCurrentTraveler}/>
        <TravelerInfo currentTraveler={currentTraveler}/>
        
      </Grid>
    )
}

export default Homepage;