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


function CompareTrip({ currentTrip, column, setCurrentTrip, forwardStage }) {
    function chooseTrip(trip) {
        setCurrentTrip(trip)
        forwardStage()
    }

    return (
        <Card className="compare-trip" columnStart={column}>
            {
                currentTrip ?
                    <>
                        <h3>{currentTrip.details.destination}</h3>
                        <div>
                            <p><b>{currentTrip.details.departure} to {currentTrip.details.destination}</b></p>
                            <p><b>Round Trip Cost: ${currentTrip.details.totalTripCost}</b></p>
                        </div>
                        <div>
                            <p><b>Hotel Name: {currentTrip.stay.name}</b></p>
                            <p><b>Hotel Cost / Night: ${currentTrip.stay.dailyCost}</b></p>
                        </div>
                        <div>
                            <p><b>Airport Transportation:</b></p>
                            <p><b>Transportation Cost: </b></p>
                        </div>
                        <div>
                            {currentTrip.itinerary.map((item, index) => (
                                <Activities key={index} activities={item.days.activities} day={index}></Activities>
                            ))}
                        </div>
                        <div>
                            <Button className="primary" onClick={() => chooseTrip(currentTrip)}>Continue</Button>
                        </div>
                    </>
                    :
                    <>Error loading itinerary</>
            }
        </Card>
    )
}

export default CompareTrip;