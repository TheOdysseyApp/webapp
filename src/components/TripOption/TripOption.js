import { Card, Button } from "@aws-amplify/ui-react";
import './TripOption.css'

function TripOption({ destination, column, setCurrentDestination, tripPlanned, forwardStage }) {
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
                            <p><b>Total Trip Cost:</b> ${destination.details.totalTripCost}</p>
                        </div>
                        <div>
                            <p><b>Hotels</b></p>
                            {destination.stay.map((item, index) => (
                                <div key={index}>
                                    <p>{index + 1}. {item.name} (${item.dailyCost})</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p><b>Workspaces</b></p>
                            {destination.workspaces.map((item, index) => (
                                <div key={index}>
                                    <p>{index + 1}. {item.name} (${item.dailyCost})</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            <p><b>Experiences</b></p>
                            {destination.experiences.map((item, index) => (
                                <div key={index}>
                                    <p>{index + 1}. {item.name} (${item.cost})</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            {destination.itinerary.days.map((item, index) => (
                                <div key={index}>
                                    <p><b>Day {index + 1}:</b></p>
                                    <p>{item.activities} (${item.cost})</p>
                                </div>
                            ))}
                        </div>
                        {tripPlanned ? null :
                            <div>
                                <Button className="primary floatBottom" onClick={() => chooseDestination(destination)}>Continue</Button>
                            </div>
                        }
                    </>
                    :
                    <p>Error loading itinerary</p>
            }
        </Card>
    )
}

export default TripOption;