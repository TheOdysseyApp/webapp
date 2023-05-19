import './TripDetails.css'

import {
    Button
  } from "@aws-amplify/ui-react";

function TripDetails({ currentTrip, currentDestination, backStage }) {

    return (
        <div className='tripdetails'>
            <Button className="secondary" onClick={backStage}>Back</Button>
            <div className='container'>

                <h1>{currentTrip.stay.name}</h1>

            </div>
        </div>

    )
}

export default TripDetails;