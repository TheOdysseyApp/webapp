import { Card, Button } from "@aws-amplify/ui-react";
import './CompareDestination.css'





function CompareDestination({ destination, column, setCurrentDestination, forwardStage }) {
    function chooseDestination(d) {
        setCurrentDestination(d)
        forwardStage()
    }

    return (
        <Card className="compare-destination" columnStart={column}>
            {
                destination ?
                    <>
                        <h3>{destination.details.destination}</h3>
                        <div>
                            <p><b>{destination.details.departure} -&gt; {destination.details.destination}</b></p>
                            <p><b>Round Trip Cost:</b> ${destination.details.totalTripCost}</p>
                        </div>
                        <div>
                            <p><b>Hotel Name:</b> {destination.stay.name}</p>
                            <p><b>Hotel Cost / Night:</b> ${destination.stay.dailyCost}</p>
                        </div>
                        <div>
                            <p><b>Airport Transportation:</b></p>
                            <p><b>Transportation Cost: </b></p>
                        </div>
                        <div>
                            {destination.itinerary.map((item, index) => (
                                <div key={index}>
                                    <p><b>Day {index + 1}:</b></p>
                                    <p>{item.days.activities}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <Button className="primary" onClick={() => chooseDestination(destination)}>Continue</Button>
                        </div>
                    </>
                    :
                    <p>Error loading itinerary</p>
            }
        </Card>
    )
}

export default CompareDestination;