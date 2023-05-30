import React, { useState } from 'react';
import './TripDetails.css'
import { Button, TextField } from "@aws-amplify/ui-react";
import DateTime from '../../components/datetime/DateTime';


function TripDetails({ traveler, destination, setCurrentTrip, forwardStage, backStage }) {
    const destinationCopy = { ...destination }
    // function stringToInt(target, value) {
    //     // TODO: handle invalid args
    //     target = parseInt(value)
    // }

    function saveAndContinue() {
        destinationCopy.departingFlight.datetime = departureDate;
        destinationCopy.returnFlight.datetime = returnDate;
        setCurrentTrip(destinationCopy);
        forwardStage();
    }

    const [departureDate, setDepartureDate] = useState(destinationCopy.departingFlight.datetime);
    const [returnDate, setReturnDate] = useState(destinationCopy.returnFlight.datetime);


    return (
        <div className='tripdetails'>
            <Button className="secondary stage-button" onClick={backStage}>&lt; Back</Button>
            <div className='container heading-container'>
                <h1>{destinationCopy.details.destination}</h1>
                <div className='traveler-heading'><p><b>{traveler.first_name} {traveler.last_name},</b> {traveler.tripId}</p></div>
                <p>Departing from: {destinationCopy.details.departure}</p>
                <p>Month of trip: {destinationCopy.details.month}</p>
                <p>Number of days: {destinationCopy.details.duration}</p>
                <p>Desired activities: {}</p>
                <p>Budget: ${}-${}</p>
            </div>
            <div className='container'>
                <h2>Departing Flight</h2>
                <TextField
                    label="Airline*"
                    defaultValue={destinationCopy.departingFlight.airline}
                    onChange={(e) => destinationCopy.departingFlight.airline = e.target.value} />
                <TextField
                    label="Departure*"
                    defaultValue={destinationCopy.departingFlight.departure}
                    onChange={(e) => destinationCopy.departingFlight.departure = e.target.value} />
                <TextField
                    label="Departure Abbreviation*"
                    defaultValue={destinationCopy.departingFlight.departureAbbrev}
                    onChange={(e) => destinationCopy.departingFlight.departureAbbrev = e.target.value} />
                <TextField
                    label="Arrival*"
                    defaultValue={destinationCopy.departingFlight.arrival}
                    onChange={(e) => destinationCopy.departingFlight.arrival = e.target.value} />
                <TextField
                    label="Arrival Abbreviation*"
                    defaultValue={destinationCopy.departingFlight.arrivalAbbrev}
                    onChange={(e) => destinationCopy.departingFlight.arrivalAbbrev = e.target.value} />
                <TextField
                    label="Class*"
                    defaultValue={destinationCopy.departingFlight.class}
                    onChange={(e) => destinationCopy.departingFlight.class = e.target.value} />
                <TextField
                    label="Cost (USD)*"
                    defaultValue={destinationCopy.departingFlight.cost}
                    onChange={(e) => destinationCopy.departingFlight.cost = e.target.value} />
                <DateTime onChange={setDepartureDate} value={departureDate} label='Departure Date/Time*'/>
                <TextField
                    label="Link*"
                    defaultValue={destinationCopy.departingFlight.link}
                    onChange={(e) => destinationCopy.departingFlight.link = e.target.value} />
            </div>
            <div className='container'>
                <h2>Return Flight</h2>
                <TextField
                    label="Airline*"
                    defaultValue={destinationCopy.returnFlight.airline}
                    onChange={(e) => destinationCopy.returnFlight.airline = e.target.value} />
                <TextField
                    label="Departure*"
                    defaultValue={destinationCopy.returnFlight.departure}
                    onChange={(e) => destinationCopy.returnFlight.departure = e.target.value} />
                <TextField
                    label="Departure Abbreviation*"
                    defaultValue={destinationCopy.returnFlight.departureAbbrev}
                    onChange={(e) => destinationCopy.returnFlight.departureAbbrev = e.target.value} />
                <TextField
                    label="Arrival*"
                    defaultValue={destinationCopy.returnFlight.arrival}
                    onChange={(e) => destinationCopy.returnFlight.arrival = e.target.value} />
                <TextField
                    label="Arrival Abbreviation*"
                    defaultValue={destinationCopy.returnFlight.arrivalAbbrev}
                    onChange={(e) => destinationCopy.returnFlight.arrivalAbbrev = e.target.value} />
                <TextField
                    label="Class*"
                    defaultValue={destinationCopy.returnFlight.class}
                    onChange={(e) => destinationCopy.returnFlight.class = e.target.value} />
                <TextField
                    label="Cost (USD)*"
                    defaultValue={destinationCopy.returnFlight.cost}
                    onChange={(e) => destinationCopy.returnFlight.cost = e.target.value} />
                <DateTime onChange={setReturnDate} value={returnDate} label='Return Date/Time*'/>
                <TextField
                    label="Link*"
                    defaultValue={destinationCopy.returnFlight.link}
                    onChange={(e) => destinationCopy.returnFlight.link = e.target.value} />
            </div>
            <div className='container'>
                <h2>Hotel Information</h2>
                <TextField
                    label="Flight Booking Link*"
                    defaultValue={destinationCopy.stay.name}
                    onChange={(e) => destinationCopy.stay.name = e.target.value} />
                <TextField
                    label="Daily Cost (USD)*"
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
                <h2>Workspaces</h2>
                <TextField
                    label="Name*"
                    defaultValue={destinationCopy.workspaces.name}
                    onChange={(e) => destinationCopy.workspaces.name = e.target.value} />
                <TextField
                    label="Daily Cost (USD)*"
                    defaultValue={destinationCopy.workspaces.dailyCost}
                    onChange={(e) => destinationCopy.workspaces.dailyCost = e.target.value} />
                <TextField
                    label="Number of Days*"
                    defaultValue={destinationCopy.workspaces.numDays}
                    onChange={(e) => destinationCopy.workspaces.numDays = e.target.value} />
                <TextField
                    label="Link*"
                    defaultValue={destinationCopy.workspaces.link}
                    onChange={(e) => destinationCopy.workspaces.link = e.target.value} />
            </div>
            <div className='container'>
                <h2>Experiences</h2>
                <TextField
                    label="Name*"
                    defaultValue={destinationCopy.experiences.name}
                    onChange={(e) => destinationCopy.experiences.name = e.target.value} />
                <TextField
                    label="Cost (USD)*"
                    defaultValue={destinationCopy.experiences.cost}
                    onChange={(e) => destinationCopy.experiences.cost = e.target.value} />
                <TextField
                    label="Link*"
                    defaultValue={destinationCopy.experiences.link}
                    onChange={(e) => destinationCopy.experiences.link = e.target.value} />
                {/* Image is hardcoded for the demo, change later */}
                <TextField
                    label="Experience Image*"
                    defaultValue={'https://images.unsplash.com/photo-1523906834658-6e24ef2386f9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=983&q=80'}
                    onChange={(e) => destinationCopy.experiences.imageURL = e.target.value} />
            </div>
            <div className='container'>
                <h2>Itinerary</h2>
                {destinationCopy.itinerary.map((item, index) => (
                    <TextField
                        label={`Day ${index + 1}*`}
                        defaultValue={item.days.activities}
                        onChange={(e) => item.days.activities = e.target.value} 
                        key={index} />
                ))}
            </div>

            
            <Button className="primary stage-button" onClick={() => saveAndContinue()} style={{marginBottom: '40px'}}>Continue</Button>
        </div>

    )
}

export default TripDetails;