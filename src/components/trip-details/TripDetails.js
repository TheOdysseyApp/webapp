import React, { useState } from 'react'
import './TripDetails.css'
import { Button, TextField } from "@aws-amplify/ui-react";

function TripDetails({ trip, destination, backStage }) {
    const [flightArrival, setFlightArrival] = useState("")
    const [flightDestination, setFlightDestination] = useState("")
    const [flightRoundTripCost, setFlightRoundTripCost] = useState("")
    const [flightBookingLink, setFlightBookingLink] = useState("")


    return (
        <div className='tripdetails'>
            <Button className="secondary" onClick={backStage}>Back</Button>
            <div className='container'>
                <h1>{trip.details.destination}</h1>
                <h3>{trip.first_name} {trip.last_name}, {trip.id}</h3>
                <p>Departing from: {trip.details.departure}</p>
                <p>Month of Trip: {trip.details.month}</p>
                <p>Number of days: {trip.details.duration}</p>
                <p>Desired activities: {}</p>
                <p>Budget: ${}-${}</p>
            </div>
            <div className='container'>
                <h1>Flight Information</h1>
                <TextField
                    placeholder="..."
                    label="Flight Arrival*"
                    defaultValue={trip.departingFlight.departure}
                    onChange={(e) => setFlightArrival(e.target.value)} />
                <TextField
                    placeholder="..."
                    label="Flight Destination*"
                    defaultValue={trip.departingFlight.arrival}
                    onChange={(e) => setFlightDestination(e.target.value)} />
                <TextField
                    placeholder="..."
                    label="Flight Round Trip Cost*"
                    defaultValue={trip.departingFlight.cost}
                    onChange={(e) => setFlightRoundTripCost(e.target.value)} />
                <TextField
                    placeholder="..."
                    label="Flight Booking Link*"
                    defaultValue=""
                    onChange={(e) => setFlightBookingLink(e.target.value)} />
            </div>
            <div className='container'>
                <h1>Hotel Information</h1>
                <p>Hotel Name*</p>
            </div>
        </div>

    )
}

export default TripDetails;