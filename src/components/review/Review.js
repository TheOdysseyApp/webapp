import './Review.css'
import { Button } from "@aws-amplify/ui-react";
import React from 'react';


export default function Review({ traveler, destination, forwardStage, backStage }) {
    return (
        <div className="Review">
            <div className="container">
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
                <p><b>Arrival Date: </b>{new Date(destination.departingFlight.datetime).toLocaleDateString()}</p>
                <p><b>Departure Date: </b>{new Date(destination.returnFlight.datetime).toLocaleDateString()}</p>
                <p><b>Flight Booking Link: </b>{destination.departingFlight.link}</p>
                <p><b>Hotel Name: </b>{destination.stay.name}</p>
                <p><b>Hotel Cost / Night: </b>${destination.stay.dailyCost}</p>
                <p><b>Hotel Booking Link: </b>{destination.stay.link}</p>
                <p><b>Airport Transportation: </b></p>
                <p><b>Transportation Cost: </b></p> 
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
            
            <Button className="primary" onClick={forwardStage}>Submit</Button>
            <Button className="secondary" onClick={backStage}>Return to editing</Button>

        </div>
    )
}