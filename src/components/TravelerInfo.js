import { Card, View } from "@aws-amplify/ui-react";

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