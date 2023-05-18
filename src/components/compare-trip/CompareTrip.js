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


function CompareTrip({ currentTraveler, column, setCurrentTrip, forwardStage }) {

    function chooseTrip(trip) {
        setCurrentTrip(trip)
        forwardStage()
    }

    return (
        <Card className="compare-trip" columnStart={column}>
            {
                currentTraveler ?
                    <>
                        <h3>{currentTraveler.details.M.destination.S}</h3>
                        <div>
                            <p><b>{currentTraveler.details.M.departure.S} to {currentTraveler.details.M.destination.S}</b></p>
                            <p><b>Round Trip Cost: ${currentTraveler.details.M.totalTripCost.N}</b></p>
                        </div>
                        <div>
                            <p><b>Hotel Name: {currentTraveler.stay.M.name.S}</b></p>
                            <p><b>Hotel Cost / Night: ${currentTraveler.stay.M.dailyCost.N}</b></p>
                        </div>
                        <div>
                            <p><b>Airport Transportation:</b></p>
                            <p><b>Transportation Cost: </b></p>
                        </div>
                        <div>
                            {/* {itinerary.itinerary.map((item, index) => (
                                <Activities key={index} activities={item.days.activities} day={index}></Activities>
                            ))} */}
                        </div>
                        <div>
                            <Button className="primary" onClick={() => chooseTrip(currentTraveler)}>Continue</Button>
                        </div>
                    </>
                    :
                    <>Error loading itinerary</>
            }
        </Card>
    )
}

export default CompareTrip;