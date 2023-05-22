import React, { useState } from 'react'
import './TripDetails.css'
import { Button, TextField } from "@aws-amplify/ui-react";

function TripDetails({ trip, destination, backStage }) {
    const tripCopy = { ...trip }

    return (
        <div className='tripdetails'>
            <Button className="secondary" onClick={backStage}>Back</Button>
            <div className='container'>
                <h1>{tripCopy.details.destination}</h1>
                <h3>{tripCopy.first_name} {tripCopy.last_name}, {tripCopy.id}</h3>
                <p>Departing from: {tripCopy.details.departure}</p>
                <p>Month of tripCopy: {tripCopy.details.month}</p>
                <p>Number of days: {tripCopy.details.duration}</p>
                <p>Desired activities: {}</p>
                <p>Budget: ${}-${}</p>
            </div>
            <div className='container'>
                <h1>Flight Information</h1>
                <TextField
                    placeholder="..."
                    label="Flight Arrival*"
                    defaultValue={tripCopy.departingFlight.departure}
                    onChange={(e) => tripCopy.departingFlight.departure = e.target.value} />
                <TextField
                    placeholder="..."
                    label="Flight Destination*"
                    defaultValue={tripCopy.departingFlight.arrival}
                    onChange={(e) => tripCopy.departingFlight.arrival = e.target.value} />
                <TextField
                    placeholder="..."
                    label="Flight Round tripCopy Cost*"
                    defaultValue={tripCopy.departingFlight.cost}
                    onChange={(e) => tripCopy.departingFlight.cost = e.target.value} />
                <TextField
                    placeholder="..."
                    label="Flight Booking Link*"
                    defaultValue={tripCopy.departingFlight.link}
                    onChange={(e) => tripCopy.departingFlight.link = e.target.value} />
            </div>
            <div className='container'>
                <h1>Hotel Information</h1>
                <p>Hotel Name*</p>
            </div>
            <Button className="primary" onClick={() => console.log(tripCopy)}>Continue</Button>
        </div>

    )
}

export default TripDetails;