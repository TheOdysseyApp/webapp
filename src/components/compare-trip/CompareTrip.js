import { Card, Button } from "@aws-amplify/ui-react";
import './CompareTrip.css'


function Activities({ activities, day }) {
    return (
        <div>
            <p><b>Day {day + 1}:</b></p>
            <p>{activities}</p>
        </div>
    );
}


function CompareTrip({ itinerary, column, forwardStage }) {

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
                            {itinerary.itinerary.map((item, index) => (
                                <Activities key={index} activities={item.days.activities} day={index}></Activities>
                            ))}
                        </div>
                        <div>
                            <Button className="primary" onClick={forwardStage}>Continue</Button>
                        </div>
                    </>
                    :
                    <>Error loading itinerary</>
            }
        </Card>
    )
}

export default CompareTrip;