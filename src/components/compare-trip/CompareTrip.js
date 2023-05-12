import { Card, Button } from "@aws-amplify/ui-react";
import './CompareTrip.css'

function CompareTrip({ itinerary, column, forwardStage }) {
    console.log("Compare trip")
    console.log(itinerary)

    return (
        <Card className="compare-trip" columnStart={column}>
            {
                itinerary ? 
                <>
                <h3>{itinerary.details.destination}</h3>
                <div>
                    <p><b>{itinerary.details.departure} to {itinerary.details.destination}</b></p>
                    <p><b>Round Trip Cost: ${itinerary.details.totalTripCost}</b></p>
                </div>
                <div>
                    <p><b>Hotel Name: {itinerary.stay.name}</b></p>
                    <p><b>Hotel Cost / Night: ${itinerary.stay.dailyCost}</b></p>
                </div>
                <div>
                    <p><b>Airport Transportation:</b></p>
                    <p><b>Transportation Cost: </b></p>
                </div>
                <div>
                    <p><b>Day 1:</b></p>
                    <p>Activity goes here</p>
                    <p><b>Day 2:</b></p>
                    <p>Activity goes here</p>
                    <p><b>Day 3:</b></p>
                    <p>Activity goes here</p>
                    <p><b>Day 4:</b></p>
                    <p>Activity goes here</p>
                    <p><b>Day 5:</b></p>
                    <p>Activity goes here</p>
                    <p><b>Day 6:</b></p>
                    <p>Activity goes here</p>
                </div>
                <div>
                <Button className="primary" onClick={forwardStage}>Continue</Button>
                </div>
                </>
                :
                <>No</>
            }
        </Card>
    )
}

export default CompareTrip;