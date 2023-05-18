import { Card, View, Grid } from "@aws-amplify/ui-react";
import CompareTrip from "../compare-trip/CompareTrip"
import './TravelerInfo.css'

function TravelerInfo({ currentTraveler, setCurrentTrip, forwardStage }) {
    console.log(currentTraveler)
    return (
        <Card
          columnStart="2"
          columnEnd="-1"
          className="TravelerInfo"
        >
          {
            (currentTraveler) ? 
            <View className="TravelerInfoSelected">
              <div className="header">
                <h1>{currentTraveler.first_name.S + " " + currentTraveler.last_name.S}</h1>
                <p>{`# ${currentTraveler.id.S}`}</p>
                <div>
                  <p>{`Departing from: ${currentTraveler.details.M.departure.S}`}</p>
                  <p>{`Month of trip: ${currentTraveler.details.M.month.S}`}</p>
                  <p>{`Number of Days: ${currentTraveler.details.M.duration.S}`}</p>
                </div>
                <p>{`Desired activities: ${"Activity1, Activity2, Activity3"}`}</p>
                <p>{`Budget: $${currentTraveler.details.M.totalTripCost.N}`}</p>
              </div>
              <Grid
              templateColumns="1fr 1fr 1fr"
              className="options"
              >
                <CompareTrip currentTraveler={currentTraveler} column={1} setCurrentTrip={setCurrentTrip} forwardStage={forwardStage} />
                <CompareTrip currentTraveler={null} column={2} setCurrentTrip={setCurrentTrip} forwardStage={forwardStage} />
                <CompareTrip currentTraveler={null} column={3} setCurrentTrip={setCurrentTrip} forwardStage={forwardStage} style={{border: "none"}}/>
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