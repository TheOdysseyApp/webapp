import './Review.css'
import { Button, ScrollView } from "@aws-amplify/ui-react";
import { createItinerary } from '../../api';
import React from 'react';


export default function Review({ traveler, destination, forwardStage, backStage }) {
    function confirmTripData() {
        const destinationWithId = structuredClone(destination)
        destinationWithId.id = traveler.tripId;
        createItinerary(destinationWithId);
        forwardStage();
    }
    return (
        <ScrollView className="review">
            <div className='container heading-container'>
                <h1>Review</h1>
                <div className='traveler-heading'><p><b>{traveler.first_name} {traveler.last_name},</b> {traveler.id}</p></div>
                <p>Departing from: {traveler.departingFrom ? traveler.departingFrom : "Not provided"}</p>
                <p>Going to: {destination.details.destination ? destination.details.destination : "Not provided"}</p>
                <p>Month of trip: {traveler.month ? traveler.month : "Not provided"}</p>
                <p>Number of days: {traveler.duration ? traveler.duration : "Not provided"}</p>
                <p>Desired activities: {traveler.activities ? traveler.activities.join(', ') : "Not provided"}</p>
                <p>Budget: ${traveler.minBudget}-${traveler.maxBudget}</p>
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
                    <p><b>Link: </b><a href={destination.departingFlight.link} target="_blank" rel="noreferrer">{destination.departingFlight.link}</a></p>
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
                    <p><b>Link: </b><a href={destination.returnFlight.link} target="_blank" rel="noreferrer">{destination.returnFlight.link}</a></p>
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
                        <p><b>Booking Link: </b><a href={item.link} target="_blank" rel="noreferrer">{item.link}</a></p>
                        <p><b>Hotel Rating: </b>{item.rating}</p>
                        <p><b>Room Type: </b>{item.roomType}</p>
                        <p><b>Hotel Image: </b><a href={item.stayImgURL} target="_blank" rel="noreferrer">{item.stayImgURL}</a></p>
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
                        <p><b>Link: </b><a href={item.link} target="_blank" rel="noreferrer">{item.link}</a></p>
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
                        <p><b>Link: </b><a href={item.link} target="_blank" rel="noreferrer">{item.link}</a></p>
                        <p><b>Experience Image: </b><a href={item.imageURL} target="_blank" rel="noreferrer">{item.imageURL}</a></p>
                    </div>
                ))}
                    
            </div>
            <div className='container'>
                <h2>Itinerary</h2>
                <p><b>Image Url: </b><a href={destination.itinerary.itineraryImgURL} target="_blank" rel="noreferrer">{destination.itinerary.itineraryImgURL}</a></p>
                {destination.itinerary.days.map((item, index) => (
                    <div key={index}>
                        <p><b>Day {item.day}</b></p>
                        <p>{item.activities}</p>
                        <p>Cost (USD): {item.cost}</p>
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