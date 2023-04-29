import Header from "./Header";
import Navbar from "./Navbar";

import {
    Grid,
    Card
  } from "@aws-amplify/ui-react";

function Homepage({ items, signOut }) {
    return (
        <Grid
        templateColumns="0.5fr 1fr 1fr"
        templateRows="0.5fr 4fr"
        height="100vh"
        width="100wh"
      >
        <Header signOut={signOut}/>
        <Navbar items={items} />
        
        <Card
          columnStart="2"
          columnEnd="-1"
        >
          Main
        </Card>
      </Grid>
    )
}

export default Homepage;