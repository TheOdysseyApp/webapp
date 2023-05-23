import React from 'react'
import './TripDetails.css'
import { Button, TextField } from "@aws-amplify/ui-react";

function TripDetails({ trip, destination, setCurrentTrip, forwardStage, backStage }) {
    const tripCopy = { ...trip }

    function stringToInt(target, value) {
        // TODO: handle invalid args
        target = parseInt(value)
    }

    function saveAndContinue() {
        console.log(tripCopy)
        // setCurrentTrip(tripCopy)
        // forwardStage()
    }

    return (
        <div className='tripdetails'>
            <Button className="secondary" onClick={backStage}>Back</Button>
            <div className='container'>
                <h1>{tripCopy.details.destination}</h1>
                <h3>{tripCopy.first_name} {tripCopy.last_name}, {tripCopy.id}</h3>
                <p>Departing from: {tripCopy.details.departure}</p>
                <p>Month of trip: {tripCopy.details.month}</p>
                <p>Number of days: {tripCopy.details.duration}</p>
                <p>Desired activities: {}</p>
                <p>Budget: ${}-${}</p>
            </div>
            <div className='container'>
                <h2>Flight Information</h2>
                <TextField
                    label="Flight Arrival*"
                    defaultValue={tripCopy.departingFlight.departure}
                    onChange={(e) => tripCopy.departingFlight.departure = e.target.value} />
                <TextField
                    label="Flight Destination*"
                    defaultValue={tripCopy.departingFlight.arrival}
                    onChange={(e) => tripCopy.departingFlight.arrival = e.target.value} />
                <TextField
                    label="Departing Flight Trip Cost*"
                    defaultValue={tripCopy.departingFlight.cost}
                    onChange={(e) => tripCopy.departingFlight.cost = e.target.value} />
                <TextField
                    label="Return Flight Trip Cost*"
                    defaultValue={tripCopy.returnFlight.cost}
                    onChange={(e) => tripCopy.returnFlight.cost = e.target.value} />
                <TextField
                    label="Flight Booking Link*"
                    defaultValue={tripCopy.departingFlight.link}
                    onChange={(e) => tripCopy.departingFlight.link = e.target.value} />
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
                    defaultValue={tripCopy.stay.name}
                    onChange={(e) => tripCopy.stay.name = e.target.value} />
                <TextField
                    label="Daily Cost*"
                    defaultValue={tripCopy.stay.dailyCost}
                    onChange={(e) => tripCopy.stay.dailyCost = e.target.value} />
                <TextField
                    label="Description*"
                    defaultValue={tripCopy.stay.description}
                    onChange={(e) => tripCopy.stay.description = e.target.value} />
                <TextField
                    label="Number of Days*"
                    defaultValue={tripCopy.stay.numDays}
                    onChange={(e) => tripCopy.stay.numDays = e.target.value} />
                <TextField
                    label="Booking Link*"
                    defaultValue={tripCopy.stay.link}
                    onChange={(e) => tripCopy.stay.link = e.target.value} />
                <TextField
                    label="Hotel Rating*"
                    defaultValue={tripCopy.stay.rating}
                    onChange={(e) => tripCopy.stay.rating = e.target.value} />
                <TextField
                    label="Room Type*"
                    defaultValue={tripCopy.stay.roomType}
                    onChange={(e) => tripCopy.stay.roomType = e.target.value} />
                {/* Image is hardcoded for the demo, change later */}
                <TextField
                    label="Hotel Image*"
                    defaultValue={"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"}
                    onChange={(e) => tripCopy.stay.stayImgURL = e.target.value} />
            </div>
            <div className='container'>
                <h2>Itinerary</h2>
                {tripCopy.itinerary.map((item, index) => (
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