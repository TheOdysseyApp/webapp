import { Card, Button } from "@aws-amplify/ui-react";
import './CompareTrip.css'

function CompareTrip({ column, forwardStage }) {
    return (
        <Card className="compare-trip" columnStart={column}>
            <h3>Destination {column}</h3>
            <div>
                <p><b>Departure to Arrival</b></p>
                <p><b>Round Trip Cost:</b></p>
            </div>
            <div>
                <p><b>Hotel Name:</b></p>
                <p><b>Hotel Cost / Night: </b></p>
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
            
        </Card>
    )
}

export default CompareTrip;