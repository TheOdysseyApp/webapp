import './TripDetails.css'

import {
    Button
  } from "@aws-amplify/ui-react";

function TripDetails({ currentTraveler, currentTrip, backStage }) {
    console.log("trip details")
    console.log(currentTraveler)
    return (
        <div className='tripdetails'>
            <Button className="secondary" onClick={backStage}>Back</Button>
            <div className='container'>

                <h1>{currentTrip.details.destination}</h1>

            </div>
        </div>
    )
}

export default TripDetails;