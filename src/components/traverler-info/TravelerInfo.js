import { Card, View, Grid } from "@aws-amplify/ui-react";
import CompareTrip from "../compare-trip/CompareTrip"
import './TravelerInfo.css'

function TravelerInfo({ currentTraveler, forwardStage }) {
    return (
        <Card
          columnStart="2"
          columnEnd="-1"
          className="TravelerInfo"
        >
          {
            currentTraveler ? 
            <View className="TravelerInfoSelected">
              <div className="header">
                <h1>{currentTraveler.name}</h1>
                <p>{`# ${currentTraveler.id}`}</p>
                <div>
                  <p>{`Departing from: ${"Location"}`}</p>
                  <p>{`Month of trip: ${"Month"}`}</p>
                  <p>{`Number of Days: ${"Number"}`}</p>
                </div>
                <p>{`Desired activities: ${"Activity1, Activity2, Activity3"}`}</p>
                <p>{`Budget: ${"$maximum"}`}</p>
              </div>
              <Grid
              templateColumns="1fr 1fr 1fr"
              className="options"
              >
                <CompareTrip column={1} forwardStage={forwardStage} />
                <CompareTrip column={2} forwardStage={forwardStage} />
                <CompareTrip column={3} forwardStage={forwardStage} style={{border: "none"}}/>
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