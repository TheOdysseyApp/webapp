import { Card, View, Grid } from "@aws-amplify/ui-react";
import Location from "./Location"

function TravelerInfo({ currentTraveler }) {
    return (
        <Card
          columnStart="2"
          columnEnd="-1"
        >
          {
            currentTraveler ? 
            <View className="TravelerInfoSelected">
                <h1>{currentTraveler.name}</h1>
                <h2>{`# ${currentTraveler.id}`}</h2>
                <p>{`Departing from: ${"Location"}`}</p>
                <p>{`Month of trip: ${"Month"}`}</p>
                <p>{`Desired activities: ${"Activity1, Activity2, Activity3"}`}</p>
                <p>{`Number of Days: ${"Number"}`}</p>
                <p>{`Budget: ${"$maximum"}`}</p>


                <Grid
                templateColumns="1fr 1fr 1fr"
                >
                  <Location column={1} />
                  <Location column={2} />
                  <Location column={3} />
                </Grid>
            </View>

            :
            <View className="TravelerInfoUnselected">
                <h1>Select a traveler on the left to get started</h1>
            </View>
          }
        </Card>
    )
}

export default TravelerInfo;