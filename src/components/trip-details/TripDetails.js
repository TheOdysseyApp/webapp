import React, { useState } from 'react';
import './TripDetails.css'
import { Button, TextField, ScrollView, Expander, ExpanderItem } from "@aws-amplify/ui-react";
import DateTime from '../../components/datetime/DateTime';


function TripDetails({ traveler, destination, setCurrentDestination, forwardStage, backStage }) {
    const destinationCopy = structuredClone(destination)
    // function stringToInt(target, value) {
    //     // TODO: handle invalid args
    //     target = parseInt(value)
    // }
    console.log(destination)
    console.log(destinationCopy.details.flightImageURL)

    function saveAndContinue(event) {
        event.preventDefault();
        destinationCopy.departingFlight.datetime = departureDate;
        destinationCopy.returnFlight.datetime = returnDate;
        // swap out this if statement to validate all object fields
        // if (noMissingValues(destinationCopy)) {
        if (true) {
            setCurrentDestination(destinationCopy);
            forwardStage();
        };
    }

    // checks destination object for missing fields. currently only checks for fields present on the
    // form, but can be made to look through all object fields by switching out the if statement above
    function noMissingValues(obj) {
        for (let key in obj) {
            if (!obj[key] || obj[key] === '') {
                console.log(obj)
                console.log(key)
                return false
            } else if (typeof obj[key] === 'object' && obj !== 'itinerary') {
                if (!noMissingValues(obj[key])) return false
            }
        }
        return true
    }

    const newHotel = {
        dailyCost: "",
        description: "",
        link: "",
        name: "New option",
        numDays: "",
        rating: "",
        roomType: "",
        stayImgURL: "",
    }  

    const newWorkspace = {
        name: "New option",
        dailyCost: "",
        numDays: "",
        link: "",
    } 

    const newExperience = {
        name: "New option",
        cost: "",
        link: "",
        imgURL: "",
    } 

    // Adding a new item with the same name (i.e. "New option") makes
    // the expanders open and close together, not a huge bug but something
    // to fix later
    function addNewItem(array, item) {
        array.push(item)
        setCurrentDestination(destinationCopy)
    }

    function removeItem(array, item) {
        const index = array.indexOf(item);
        if (index !== -1) {
          array.splice(index, 1);
          setCurrentDestination(destinationCopy)
        }
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
                <p>Month of trip: {destinationCopy.month}</p>
                <p>Number of days: {destinationCopy.details.duration}</p>
                <p>Desired activities: {traveler.activties.join(', ')}</p>
                <p>Budget: ${}</p>
            </div>
            <form onSubmit={saveAndContinue}>
            <div className='container'>
                <h2>Departing Flight</h2>
                <TextField
                    label="Airline*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.departingFlight.airline}
                    onChange={(e) => destinationCopy.departingFlight.airline = e.target.value} />
                <TextField
                    label="Departure*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.departingFlight.departure}
                    onChange={(e) => destinationCopy.departingFlight.departure = e.target.value} />
                <TextField
                    label="Departure Abbreviation*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.departingFlight.departureAbbrev}
                    onChange={(e) => destinationCopy.departingFlight.departureAbbrev = e.target.value} />
                <TextField
                    label="Arrival*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.departingFlight.arrival}
                    onChange={(e) => destinationCopy.departingFlight.arrival = e.target.value} />
                <TextField
                    label="Arrival Abbreviation*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.departingFlight.arrivalAbbrev}
                    onChange={(e) => destinationCopy.departingFlight.arrivalAbbrev = e.target.value} />
                <TextField
                    label="Class*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.departingFlight.class}
                    onChange={(e) => destinationCopy.departingFlight.class = e.target.value} />
                <TextField
                    label="Cost (USD)*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.departingFlight.cost}
                    onChange={(e) => destinationCopy.departingFlight.cost = e.target.value} />
                <TextField
                    label="Flight Image URL*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.details.flightImageURL}
                    onChange={(e) => destinationCopy.details.flightImageURL = e.target.value} />
                {/* For some reason, setDepartureDate will revert any changes made to destinationCopy,
                so forcing destinationCopy to save as the current destination will make sure the changes
                don't dissapear */}
                <DateTime onChange={(e) => {setCurrentDestination(destinationCopy); setDepartureDate(e)}} value={departureDate} label='Departure Date/Time*'/>
                <TextField
                    label="Link*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.departingFlight.link}
                    onChange={(e) => destinationCopy.departingFlight.link = e.target.value} />
            </div>
            <div className='container'>
                <h2>Return Flight</h2>
                <TextField
                    label="Airline*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.returnFlight.airline}
                    onChange={(e) => destinationCopy.returnFlight.airline = e.target.value} />
                <TextField
                    label="Departure*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.returnFlight.departure}
                    onChange={(e) => destinationCopy.returnFlight.departure = e.target.value} />
                <TextField
                    label="Departure Abbreviation*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.returnFlight.departureAbbrev}
                    onChange={(e) => destinationCopy.returnFlight.departureAbbrev = e.target.value} />
                <TextField
                    label="Arrival*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.returnFlight.arrival}
                    onChange={(e) => destinationCopy.returnFlight.arrival = e.target.value} />
                <TextField
                    label="Arrival Abbreviation*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.returnFlight.arrivalAbbrev}
                    onChange={(e) => destinationCopy.returnFlight.arrivalAbbrev = e.target.value} />
                <TextField
                    label="Class*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.returnFlight.class}
                    onChange={(e) => destinationCopy.returnFlight.class = e.target.value} />
                <TextField
                    label="Cost (USD)*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.returnFlight.cost}
                    onChange={(e) => destinationCopy.returnFlight.cost = e.target.value} />
                {/* For some reason, setReturnDate will revert any changes made to destinationCopy,
                so forcing destinationCopy to save as the current destination will make sure the changes
                don't dissapear */}
                <DateTime onChange={(e) => {setCurrentDestination(destinationCopy); setReturnDate(e)}} value={returnDate} label='Return Date/Time*'/>
                <TextField
                    label="Link*"
                    required={true}
                    autoComplete='off'
                    defaultValue={destinationCopy.returnFlight.link}
                    onChange={(e) => destinationCopy.returnFlight.link = e.target.value} />
            </div>
            <div className='container'>
                <div className="header">
                    <h2>Hotels</h2>
                    <Button className="primary add" onClick={() => addNewItem(destinationCopy.stay, newHotel)}>+ New Option</Button>
                </div>
                {/* onValueChange is an event listener that triggers on items expanding/collapsing
                We're saving destinationCopy into currentDestination when this happens so that 
                the when someone re-expands, it will show the changes they made */}
                <Expander type="multiple" onValueChange={() => setCurrentDestination(destinationCopy)}>
                {destinationCopy.stay.map((item, index) => (
                    <ExpanderItem title={item.name} value={item.name} key={index}>
                        <TextField
                            label="Hotel Name*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.name}
                            onChange={(e) => item.name = e.target.value} />
                        <TextField
                            label="Daily Cost (USD)*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.dailyCost}
                            onChange={(e) => item.dailyCost = e.target.value} />
                        <TextField
                            label="Description*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.description}
                            onChange={(e) => item.description = e.target.value} />
                        <TextField
                            label="Number of Days*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.numDays}
                            onChange={(e) => item.numDays = e.target.value} />
                        <TextField
                            label="Booking Link*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.link}
                            onChange={(e) => item.link = e.target.value} />
                        <TextField
                            label="Hotel Rating*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.rating}
                            onChange={(e) => item.rating = e.target.value} />
                        <TextField
                            label="Room Type*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.roomType}
                            onChange={(e) => item.roomType = e.target.value} />
                        <TextField
                            label="Hotel Image*"
                            defaultValue={item.stayImgURL}
                            required={true}
                            autoComplete='off'
                            onChange={(e) => item.stayImgURL = e.target.value} />
                        <Button className="secondary" onClick={() => removeItem(destinationCopy.stay, item)}>Remove</Button>
                    </ExpanderItem>
                ))}
                </Expander>
            </div>
            <div className='container'>
                <div className='header'>
                    <h2>Workspaces</h2>
                    <Button className="primary add" onClick={() => addNewItem(destinationCopy.workspaces, newWorkspace)}>+ New Option</Button>
                </div>
                {/* onValueChange is an event listener that triggers on items expanding/collapsing
                We're saving destinationCopy into currentDestination when this happens so that 
                the when someone re-expands, it will show the changes they made */}
                <Expander type="multiple" onValueChange={() => setCurrentDestination(destinationCopy)}>
                {destinationCopy.workspaces.map((item, index) => (
                    <ExpanderItem title={item.name} value={item.name} key={index}>
                        <TextField
                            label="Name*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.name}
                            onChange={(e) => item.name = e.target.value} />
                        <TextField
                            label="Daily Cost (USD)*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.dailyCost}
                            onChange={(e) => item.dailyCost = e.target.value} />
                        <TextField
                            label="Number of Days*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.numDays}
                            onChange={(e) => item.numDays = e.target.value} />
                        <TextField
                            label="Link*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.link}
                            onChange={(e) => item.link = e.target.value} />
                        <Button className="secondary" onClick={() => removeItem(destinationCopy.workspaces, item)}>Remove</Button>
                    </ExpanderItem>
                ))}
                </Expander>
            </div>
            <div className='container'>
                <div className='header'>
                    <h2>Experiences</h2>
                    <Button className="primary add" onClick={() => addNewItem(destinationCopy.experiences, newExperience)}>+ New Option</Button>
                </div>
                {/* onValueChange is an event listener that triggers on items expanding/collapsing
                We're saving destinationCopy into currentDestination when this happens so that 
                the when someone re-expands, it will show the changes they made */}
                <Expander type="multiple" onValueChange={() => setCurrentDestination(destinationCopy)}>
                {destinationCopy.experiences.map((item, index) => (
                    <ExpanderItem title={item.name} value={item.name} key={index}>
                        <TextField
                        label="Name*"
                        required={true}
                        autoComplete='off'
                        defaultValue={item.name}
                        onChange={(e) => item.name = e.target.value} />
                        <TextField
                            label="Cost (USD)*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.cost}
                            onChange={(e) => item.cost = e.target.value} />
                        <TextField
                            label="Link*"
                            required={true}
                            autoComplete='off'
                            defaultValue={item.link}
                            onChange={(e) => item.link = e.target.value} />
                        <TextField
                            label="Experience Image*"
                            defaultValue={item.imageURL}
                            required={true}
                            autoComplete='off'
                            onChange={(e) => item.imageURL = e.target.value} />
                        <Button className="secondary" onClick={() => removeItem(destinationCopy.experiences, item)}>Remove</Button>
                    </ExpanderItem>
                ))}
                </Expander>
            </div>
            <div className='container'>
                <h2>Itinerary</h2>
                {destinationCopy.itinerary.map((item, index) => (
                    <TextField
                        label={`Day ${index + 1}*`}
                        required={true}
                        autoComplete='off'
                        defaultValue={item.days.activities}
                        onChange={(e) => item.days.activities = e.target.value} 
                        key={index} />
                ))}
            </div>

            
            <Button type="submit" className="primary stage-button" style={{marginBottom: '40px'}}>Continue</Button>
            </form>
        </ScrollView>

    )
}

export default TripDetails;