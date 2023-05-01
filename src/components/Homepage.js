import Navbar from "./navbar/Navbar";
import Sidebar from "./sidebar/Sidebar";

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
        templateColumns="1.3fr 4fr"
        templateRows="55px 6fr"
        height="100vh"
        width="100wh"
      >
        <Navbar signOut={signOut}/>
        <Sidebar items={items} setCurrentTraveler={setCurrentTraveler}/>
        <TravelerInfo currentTraveler={currentTraveler}/>
        
      </Grid>
    )
}

export default Homepage;