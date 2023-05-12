import { Card, View, Grid } from "@aws-amplify/ui-react";
import CompareTrip from "../compare-trip/CompareTrip"
import './TravelerInfo.css'
import { fetchTravelerInfo } from "../../api";

function TravelerInfo({ currentTravelerId, forwardStage }) {
    console.log(currentTravelerId)
    const currentTraveler = currentTravelerId ? fetchTravelerInfo(currentTravelerId) : null;
    console.log("current traveler")
    console.log(currentTraveler)

    return (
        <Card
          columnStart="2"
          columnEnd="-1"
          className="TravelerInfo"
        >
          {
            currentTravelerId ? 
            <View className="TravelerInfoSelected">
              <div className="header">
                <h1>{currentTraveler.name}</h1>
                <p>{`# ${currentTravelerId}`}</p>
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
                <CompareTrip itinerary={currentTraveler.get("1")} column={1} forwardStage={forwardStage} />
                <CompareTrip itinerary={currentTraveler.get("2")} column={2} forwardStage={forwardStage} />
                <CompareTrip itinerary={currentTraveler.get("3")} column={3} forwardStage={forwardStage} style={{border: "none"}}/>
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