import './Confirmation.css'
import React from 'react';

export default function Confirmation({traveler, destination}) {
    return (
        <div className='confirmation'>
            <div className='container'>
              <h1 className = "Success">Success!</h1>
              <p className="Traveler">Itinerary has been sent to <b>{traveler.first_name}, {traveler.last_name}</b></p>
              <p className="IDnum">#{traveler.tripId}</p>
              <p className="Days">{destination.details.duration} in {destination.details.destination}</p>
            </div>
        </div>
    )
}

