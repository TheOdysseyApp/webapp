import Header from "./Header";
import Navbar from "./Navbar";

import {
    Grid,
    Card
  } from "@aws-amplify/ui-react";

function Homepage() {
    return (
        <Grid
        columnGap="0.5rem"
        rowGap="0.5rem"
        templateColumns="1fr 1fr 1fr"
        templateRows="1fr 3fr 1fr"
      >
        <Header />
        <Navbar />
        
        <Card
          columnStart="2"
          columnEnd="-1"
        >
          Main
        </Card>
        <Card
          columnStart="2"
          columnEnd="-1"
        >
          Footer
        </Card>
      </Grid>
    )
}

export default Homepage;