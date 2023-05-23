import { Card, View, Grid } from "@aws-amplify/ui-react";
import CompareDestination from "../compare-destination/CompareDestination"
import './TravelerInfo.css'

function TravelerInfo({ currentTripId, traveler, trip, setCurrentDestination, forwardStage }) {
  return (
    <Card
      columnStart="2"
      columnEnd="-1"
      className="TravelerInfo"
    >
      {
        (currentTripId && traveler && trip && Object.keys(trip).length !== 0) ? 
        <View className="TravelerInfoSelected">
          <div className="header">
            <h1>{traveler.first_name + " " + traveler.last_name}</h1>
            <p>{`# ${traveler.tripId}`}</p>
            {/* We need to move this information into the traveler object as well
                which we need to contact backend team about */}
            <div>
              <p>{`Departing from: `}</p>
              <p>{`Month of trip: `}</p>
              <p>{`Number of Days: `}</p>
            </div>
            <p>{`Desired activities: ${"Activity1, Activity2, Activity3"}`}</p>
            <p>{`Budget: `}</p>
      
          </div>
          <Grid
          templateColumns="1fr 1fr 1fr"
          className="options"
          >
            <CompareDestination destination={trip.A} column={1} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} />
            <CompareDestination destination={trip.B} column={2} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} />
            <CompareDestination destination={trip.C} column={3} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} style={{border: "none"}}/>
          </Grid>
        </View>
        : (trip && Object.keys(trip).length === 0) ? 
        <View className="TravelerInfoUnselected">
            <h3 className="noTraveler">Server error</h3>
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