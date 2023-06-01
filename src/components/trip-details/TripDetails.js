import React, { useState } from 'react';
import './TripDetails.css'
import { Button, TextField, ScrollView, Divider } from "@aws-amplify/ui-react";
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
        <ScrollView className='tripdetails'>
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
                {destinationCopy.stay.map((item, index) => (
                    <div className="stay" key={index}>
                        <h4>Option {index+1}</h4>
                        <TextField
                            label="Hotel Name*"
                            defaultValue={item.name}
                            onChange={(e) => item.name = e.target.value} />
                        <TextField
                            label="Daily Cost (USD)*"
                            defaultValue={item.dailyCost}
                            onChange={(e) => item.dailyCost = e.target.value} />
                        <TextField
                            label="Description*"
                            defaultValue={item.description}
                            onChange={(e) => item.description = e.target.value} />
                        <TextField
                            label="Number of Days*"
                            defaultValue={item.numDays}
                            onChange={(e) => item.numDays = e.target.value} />
                        <TextField
                            label="Booking Link*"
                            defaultValue={item.link}
                            onChange={(e) => item.link = e.target.value} />
                        <TextField
                            label="Hotel Rating*"
                            defaultValue={item.rating}
                            onChange={(e) => item.rating = e.target.value} />
                        <TextField
                            label="Room Type*"
                            defaultValue={item.roomType}
                            onChange={(e) => item.roomType = e.target.value} />
                        {/* Image is hardcoded for the demo, change later */}
                        <TextField
                            label="Hotel Image*"
                            defaultValue={"https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"}
                            onChange={(e) => item.stayImgURL = e.target.value} />
                        <Divider />
                    </div>
                ))}
                
            </div>
            <div className='container'>
                <h2>Workspaces</h2>
                {destinationCopy.workspaces.map((item, index) => (
                    <div className="workspace" key={index}>
                        <h4>Option {index+1}</h4>
                        <TextField
                            label="Name*"
                            defaultValue={item.name}
                            onChange={(e) => item.name = e.target.value} />
                        <TextField
                            label="Daily Cost (USD)*"
                            defaultValue={item.dailyCost}
                            onChange={(e) => item.dailyCost = e.target.value} />
                        <TextField
                            label="Number of Days*"
                            defaultValue={item.numDays}
                            onChange={(e) => item.numDays = e.target.value} />
                        <TextField
                            label="Link*"
                            defaultValue={item.link}
                            onChange={(e) => item.link = e.target.value} />
                        <Divider />
                    </div>
                ))}
                
            </div>
            <div className='container'>
                <h2>Experiences</h2>
                {destinationCopy.experiences.map((item, index) => (
                    <div className="experience" key={index}>
                        <h4>Option {index+1}</h4>
                        <TextField
                        label="Name*"
                        defaultValue={item.name}
                        onChange={(e) => item.name = e.target.value} />
                        <TextField
                            label="Cost (USD)*"
                            defaultValue={item.cost}
                            onChange={(e) => item.cost = e.target.value} />
                        <TextField
                            label="Link*"
                            defaultValue={item.link}
                            onChange={(e) => item.link = e.target.value} />
                                <TextField
                            label="Experience Image*"
                            defaultValue={''}
                            onChange={(e) => item.imageURL = e.target.value} />
                        <Divider />
                    </div>
                ))}
                
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
        </ScrollView>

    )
}

export default TripDetails;