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
                <p>Desired activities: {traveler.activities.join(',')}</p>
                <p>Budget: ${destination.minimum_budget}-${destination.maximum_budget}</p>
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
                {destination.stay.map((item, index) => (
                    <div className="stay" key={index}>
                        <h4>Option {index + 1}</h4>
                        <p><b>Name: </b>{item.name}</p>
                        <p><b>Daily Cost (USD): </b>{item.dailyCost}</p>
                        <p><b>Description: </b>{item.description}</p>
                        <p><b>Number of Days: </b>{item.numDays}</p>
                        <p><b>Booking Link: </b>{item.link}</p>
                        <p><b>Hotel Rating: </b>{item.rating}</p>
                        <p><b>Room Type: </b>{item.roomType}</p>
                        <p><b>Hotel Image: </b>{item.stayImgURL}</p>
                    </div>
                ))}
                    
            </div>
            <div className='container'>
                <h2>Workspaces</h2>
                {destination.workspaces.map((item, index) => (
                    <div className="workspaces" key={index}>
                        <h4>Option {index + 1}</h4>
                        <p><b>Name: </b>{item.name}</p>
                        <p><b>Daily Cost (USD): </b>{item.dailyCost}</p>
                        <p><b>Number of Days: </b>{item.numDays}</p>
                        <p><b>Link: </b>{item.link}</p>
                    </div>
                ))}
                    
            </div>
            <div className='container'>
                <h2>Experiences</h2>
                {destination.experiences.map((item, index) => (
                    <div className='experiences' key={index} >
                        <h4>Option {index + 1}</h4>
                        <p><b>Name: </b>{item.name}</p>
                        <p><b>Cost (USD): </b>{item.cost}</p>
                        <p><b>Link: </b>{item.link}</p>
                        <p><b>Experience Image: </b>{item.imageURL}</p>
                    </div>
                ))}
                    
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