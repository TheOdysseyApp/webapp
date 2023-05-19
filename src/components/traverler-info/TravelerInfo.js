import { Card, View, Grid } from "@aws-amplify/ui-react";
import CompareDestination from "../compare-destination/CompareDestination"
import './TravelerInfo.css'

function TravelerInfo({ trip, setCurrentDestination, forwardStage }) {
  console.log(trip)
  return (
    <Card
      columnStart="2"
      columnEnd="-1"
      className="TravelerInfo"
    >
      {
        (trip && Object.keys(trip).length !== 0) ? 
        <View className="TravelerInfoSelected">
          <div className="header">
            <h1>{trip.first_name + " " + trip.last_name}</h1>
            <p>{`# ${trip.id}`}</p>
            <div>
              <p>{`Departing from: ${trip.details.departure}`}</p>
              <p>{`Month of trip: ${trip.details.month}`}</p>
              <p>{`Number of Days: ${trip.details.duration}`}</p>
            </div>
            <p>{`Desired activities: ${"Activity1, Activity2, Activity3"}`}</p>
            <p>{`Budget: $${trip.details.totalTripCost}`}</p>
      
          </div>
          <Grid
          templateColumns="1fr 1fr 1fr"
          className="options"
          >
            <CompareDestination destination={trip} column={1} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} />
            <CompareDestination destination={null} column={2} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} />
            <CompareDestination destination={null} column={3} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} style={{border: "none"}}/>
          </Grid>
        </View>
        :
        <View className="TravelerInfoUnselected">
            <h3 className="noTraveler">Select a traveler to get started</h3>
        </View>
      }
    </Card>
  )
}

export default TravelerInfo;