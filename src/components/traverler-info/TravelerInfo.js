import { Card, View, Grid } from "@aws-amplify/ui-react";
import CompareTrip from "../compare-trip/CompareTrip"
import './TravelerInfo.css'

function TravelerInfo({ currentTrip, setCurrentDestination, forwardStage }) {
  console.log(currentTrip)
  return (
    <Card
      columnStart="2"
      columnEnd="-1"
      className="TravelerInfo"
    >
      {
        (currentTrip && Object.keys(currentTrip).length !== 0) ? 
        <View className="TravelerInfoSelected">
          <div className="header">
            <h1>{currentTrip.first_name + " " + currentTrip.last_name}</h1>
            <p>{`# ${currentTrip.id}`}</p>
            <div>
              <p>{`Departing from: ${currentTrip.details.departure}`}</p>
              <p>{`Month of trip: ${currentTrip.details.month}`}</p>
              <p>{`Number of Days: ${currentTrip.details.duration}`}</p>
            </div>
            <p>{`Desired activities: ${"Activity1, Activity2, Activity3"}`}</p>
            <p>{`Budget: $${currentTrip.details.totalTripCost}`}</p>
      
          </div>
          <Grid
          templateColumns="1fr 1fr 1fr"
          className="options"
          >
            <CompareTrip currentTrip={currentTrip} column={1} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} />
            <CompareTrip currentTrip={null} column={2} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} />
            <CompareTrip currentTrip={null} column={3} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} style={{border: "none"}}/>
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