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
                            <p><b>Total Trip Cost:</b> ${destination.details.totalTripCost}</p>
                        </div>
                        <div>
                            {destination.stay.map((item, index) => (
                                <div key={index}>
                                    <p><b>Hotel {index + 1} Name:</b> {item.name}</p>
                                    <p><b>Hotel {index + 1} Cost / Night:</b> ${item.dailyCost}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            {destination.workspaces.map((item, index) => (
                                <div key={index}>
                                    <p><b>Workspace {index + 1} Name:</b> {item.name}</p>
                                    <p><b>Workspace {index + 1} Cost / Day:</b> ${item.dailyCost}</p>
                                </div>
                            ))}
                        </div>
                        <div>
                            {destination.experiences.map((item, index) => (
                                <div key={index}>
                                    <p><b>Experience {index + 1}:</b> {item.name}</p>
                                    <p><b>Experiences {index + 1} Cost:</b> ${item.cost}</p>
                                </div>
                            ))}
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
                            <Button className="primary floatBottom" onClick={() => chooseDestination(destination)}>Continue</Button>
                        </div>
                    </>
                    :
                    <p>Error loading itinerary</p>
            }
        </Card>
    )
}

export default CompareDestination;