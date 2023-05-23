import React from 'react'
import './TripDetails.css'
import { Button, TextField } from "@aws-amplify/ui-react";

function TripDetails({ traveler, destination, setCurrentTrip, forwardStage, backStage }) {
    const destinationCopy = { ...destination }
    function stringToInt(target, value) {
        // TODO: handle invalid args
        target = parseInt(value)
    }

    function saveAndContinue() {
        console.log(destinationCopy)
        // setCurrentTrip(tripCopy)
        // forwardStage()
    }

    return (
        <div className='tripdetails'>
            <Button className="secondary" onClick={backStage}>Back</Button>
            <div className='container'>
                <h1>{destinationCopy.details.destination}</h1>
                <h3>{traveler.first_name} {traveler.last_name}, {traveler.tripId}</h3>
                <p>Departing from: {destinationCopy.details.departure}</p>
                <p>Month of trip: {destinationCopy.details.month}</p>
                <p>Number of days: {destinationCopy.details.duration}</p>
                <p>Desired activities: {}</p>
                <p>Budget: ${}-${}</p>
            </div>
            <div className='container'>
                <h2>Flight Information</h2>
                <TextField
                    label="Flight Arrival*"
                    defaultValue={destinationCopy.departingFlight.departure}
                    onChange={(e) => destinationCopy.departingFlight.departure = e.target.value} />
                <TextField
                    label="Flight Destination*"
                    defaultValue={destinationCopy.departingFlight.arrival}
                    onChange={(e) => destinationCopy.departingFlight.arrival = e.target.value} />
                <TextField
                    label="Departing Flight Trip Cost*"
                    defaultValue={destinationCopy.departingFlight.cost}
                    onChange={(e) => destinationCopy.departingFlight.cost = e.target.value} />
                <TextField
                    label="Return Flight Trip Cost*"
                    defaultValue={destinationCopy.returnFlight.cost}
                    onChange={(e) => destinationCopy.returnFlight.cost = e.target.value} />
                <TextField
                    label="Flight Booking Link*"
                    defaultValue={destinationCopy.departingFlight.link}
                    onChange={(e) => destinationCopy.departingFlight.link = e.target.value} />
            </div>
            {/* stay: 
            dailyCost: 800
            description: "Escape to a tropical paradise at The Ritz-Carlton, Kapalua."
            link: "https://www.ritzcarlton.com/en/hotels/kapalua-maui"
            name: "The Ritz-Carlton, Kapalua"
            numDays: 5
            rating: 4.9
            roomType: "Deluxe Room"
            stayImgURL: "" */}
            <div className='container'>
                <h2>Hotel Information</h2>
                <TextField
                    label="Flight Booking Link*"
                    defaultValue={destinationCopy.stay.name}
                    onChange={(e) => destinationCopy.stay.name = e.target.value} />
                <TextField
                    label="Daily Cost*"
                    defaultValue={destinationCopy.stay.dailyCost}
                    onChange={(e) => destinationCopy.stay.dailyCost = e.target.value} />
                <TextField
                    label="Description*"
                    defaultValue={destinationCopy.stay.description}
                    onChange={(e) => destinationCopy.stay.description = e.target.value} />
                <TextField
                    label="Number of Days*"
                    defaultValue={destinationCopy.stay.numDays}
                    onChange={(e) => destinationCopy.stay.numDays = e.target.value} />
                <TextField
                    label="Booking Link*"
                    defaultValue={destinationCopy.stay.link}
                    onChange={(e) => destinationCopy.stay.link = e.target.value} />
                <TextField
                    label="Hotel Rating*"
                    defaultValue={destinationCopy.stay.rating}
                    onChange={(e) => destinationCopy.stay.rating = e.target.value} />
                <TextField
                    label="Room Type*"
                    defaultValue={destinationCopy.stay.roomType}
                    onChange={(e) => destinationCopy.stay.roomType = e.target.value} />
                {/* Image is hardcoded for the demo, change later */}
                <TextField
                    label="Hotel Image*"
                    defaultValue={"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"}
                    onChange={(e) => destinationCopy.stay.stayImgURL = e.target.value} />
            </div>
            <div className='container'>
                <h2>Itinerary</h2>
                {destinationCopy.itinerary.map((item, index) => (
                    <TextField
                        label={`Day ${index + 1}`}
                        defaultValue={item.days.activities}
                        onChange={(e) => item.days.activities = e.target.value} 
                        key={index} />
                ))}
            </div>
            
            <Button className="primary" onClick={() => saveAndContinue()}>Continue</Button>
        </div>

    )
}

export default TripDetails;