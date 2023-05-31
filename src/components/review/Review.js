import './Review.css'
import { Button, ScrollView } from "@aws-amplify/ui-react";
import { createItinerary } from '../../api';
import React from 'react';


export default function Review({ traveler, destination, forwardStage, backStage }) {
    function confirmTripData() {
        destination.id = traveler.tripId;
        createItinerary(destination);
        forwardStage();
    }

    return (
        <ScrollView className="review">
            <div className='container heading-container'>
                <h1>Review</h1>
                <div className='traveler-heading'><p><b>{traveler.first_name} {traveler.last_name},</b> {traveler.tripId}</p></div>
                <p>Departing from: {destination.details.departure}</p>
                <p>Going to: {destination.details.destination}</p>
                <p>Month of trip: {destination.details.month}</p>
                <p>Number of days: {destination.details.duration}</p>
                <p>Desired activities: {}</p>
                <p>Budget: ${}-${}</p>
            </div>
            <div className='container'>
                <h2>Departing Flight</h2>
                    <p><b>Airline: </b>{destination.departingFlight.airline}</p>
                    <p><b>Departure: </b>{destination.departingFlight.departure}</p>
                    <p><b>Departure Abbreviation: </b>{destination.departingFlight.departureAbbrev}</p>
                    <p><b>Arrival: </b>{destination.departingFlight.arrival}</p>
                    <p><b>Arrival Abbreviation: </b>{destination.departingFlight.arrivalAbbrev}</p>
                    <p><b>Class: </b>{destination.departingFlight.class}</p>
                    <p><b>Cost (USD): </b>{destination.departingFlight.cost}</p>
                    <p><b>Date: </b>{new Date(destination.departingFlight.datetime).toLocaleDateString()}</p>
                    <p><b>Link: </b>{destination.departingFlight.link}</p>
            </div>
            <div className='container'>
                <h2>Return Flight</h2>
                    <p><b>Airline: </b>{destination.returnFlight.airline}</p>
                    <p><b>Departure: </b>{destination.returnFlight.departure}</p>
                    <p><b>Departure Abbreviation: </b>{destination.returnFlight.departureAbbrev}</p>
                    <p><b>Arrival: </b>{destination.returnFlight.arrival}</p>
                    <p><b>Arrival Abbreviation: </b>{destination.returnFlight.arrivalAbbrev}</p>
                    <p><b>Class: </b>{destination.returnFlight.class}</p>
                    <p><b>Cost: </b>{destination.returnFlight.cost}</p>
                    <p><b>Date: </b>{new Date(destination.returnFlight.datetime).toLocaleDateString()}</p>
                    <p><b>Link: </b>{destination.returnFlight.link}</p>
            </div>
            <div className='container'>
                <h2>Hotel information</h2>
                    <p><b>Name: </b>{destination.stay.name}</p>
                    <p><b>Daily Cost (USD): </b>{destination.stay.dailyCost}</p>
                    <p><b>Description: </b>{destination.stay.description}</p>
                    <p><b>Number of Days: </b>{destination.stay.numDays}</p>
                    <p><b>Booking Link: </b>{destination.stay.link}</p>
                    <p><b>Hotel Rating: </b>{destination.stay.rating}</p>
                    <p><b>Room Type: </b>{destination.stay.roomType}</p>
                    <p><b>Hotel Image: </b>{destination.stay.stayImgURL}</p>
            </div>
            <div className='container'>
                <h2>Workspaces</h2>
                    <p><b>Name: </b>{destination.workspaces.name}</p>
                    <p><b>Daily Cost (USD): </b>{destination.workspaces.dailyCost}</p>
                    <p><b>Number of Days: </b>{destination.workspaces.numDays}</p>
                    <p><b>Link: </b>{destination.workspaces.link}</p>
            </div>
            <div className='container'>
                <h2>Experiences</h2>
                    <p><b>Name: </b>{destination.experiences.name}</p>
                    <p><b>Cost (USD): </b>{destination.experiences.dailyCost}</p>
                    <p><b>Link: </b>{destination.experiences.link}</p>
                    <p><b>Experience Image: </b>{destination.experiences.imageURL}</p>
            </div>
            <div className='container'>
                <h2>Itinerary</h2>
                {destination.itinerary.map((item, index) => (
                    <div key={index}>
                        <p><b>Day {index + 1}</b></p>
                        <p>{item.days.activities}</p>
                    </div>
                ))}
            </div>
            
            <div className='stage-button-container'>
                <Button className="primary stage-button" onClick={confirmTripData}>Submit</Button>
                <Button className="secondary stage-button" onClick={backStage}>Return to editing</Button>
            </div>
            

        </ScrollView>
    )
}