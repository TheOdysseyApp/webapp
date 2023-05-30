import './Review.css'
import { Button } from "@aws-amplify/ui-react";
import { createItinerary } from '../../api';
import React from 'react';


export default function Review({ traveler, destination, forwardStage, backStage }) {
    function confirmTripData() {
        destination.id = traveler.tripId;
        createItinerary(destination);
        forwardStage();
    }

    return (
        <div className="review">
            <div className="container heading-container">
                <h1>Review</h1>
                <h3>{traveler.first_name} {traveler.last_name}, {traveler.id}</h3>
                <p>Departing from: {destination.details.departure}</p>
                <p>Month of trip: {destination.details.month}</p>
                <p>Number of days: {destination.details.duration}</p>
                <p>Desired activities: {}</p>
                <p>Budget: ${}-${}</p>
            </div>
            <div className="container">
                <p><b>{destination.details.departure} -{'>'} {destination.details.destination}</b></p>
                <p><b>Round Trip Cost: </b>${destination.departingFlight.cost + destination.returnFlight.cost}</p>
                <p><b>Arrival Date: </b>{new Date(destination.departingFlight.datetime).toLocaleDateString()} {new Date(destination.departingFlight.datetime).toLocaleTimeString()}</p>
                <p><b>Departure Date: </b>{new Date(destination.returnFlight.datetime).toLocaleDateString()} {new Date(destination.returnFlight.datetime).toLocaleTimeString()}</p>
                <p><b>Flight Booking Link: </b>{destination.departingFlight.link}</p>
                <p><b>Hotel Name: </b>{destination.stay.name}</p>
                <p><b>Hotel Cost / Night: </b>${destination.stay.dailyCost}</p>
                <p><b>Hotel Booking Link: </b>{destination.stay.link}</p>
                <div>
                    {destination.itinerary.map((item, index) => (
                        <div key={index}>
                            <p><b>Day {index + 1}:</b></p>
                            <p>{item.days.activities}</p>
                        </div>
                    ))}
                </div>
                <p><b>Estimated Cost: </b>$</p>
            </div>
            
            <div className='stage-button-container'>
                <Button className="primary stage-button" onClick={confirmTripData}>Submit</Button>
                <Button className="secondary stage-button" onClick={backStage}>Return to editing</Button>
            </div>
            

        </div>
    )
}