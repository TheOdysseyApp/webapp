import './Confirmation.css'
import React from 'react';

export default function Confirmation(traveler, destination, forwardStage, backStage) {
    return (
        <div className='confirmation'>
            <div className='container'>
              <h1 className = "Success">Success!</h1>
              <p className="Traveler">Itinerary has been sent to <b>{traveler.first_name}, {traveler.last_name}</b></p>
              <p className="IDnum">{traveler.id}</p>
              <p className="Days"># Days in Location</p>
            </div>
        </div>
    )
}

