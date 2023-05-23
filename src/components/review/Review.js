import './Review.css'
import { Button } from "@aws-amplify/ui-react";


export default function Review({ trip, destination, forwardStage, backStage }) {
    return (
        <div className="Review">
            <div className="container">
                <h1>Review</h1>
                <h3>{trip.first_name} {trip.last_name}, {trip.id}</h3>
                <p>Departing from: {trip.details.departure}</p>
                <p>Month of trip: {trip.details.month}</p>
                <p>Number of days: {trip.details.duration}</p>
                <p>Desired activities: {}</p>
                <p>Budget: ${}-${}</p>
            </div>
            <div className="container">
                <p><b>{trip.details.departure} -{'>'} {trip.details.destination}</b></p>
                <p><b>Round Trip Cost: </b>${trip.departingFlight.cost + trip.returnFlight.cost}</p>
                <p><b>Arrival Date: </b>{new Date(trip.departingFlight.datetime).toLocaleDateString()}</p>
                <p><b>Departure Date: </b>{new Date(trip.returnFlight.datetime).toLocaleDateString()}</p>
                <p><b>Flight Booking Link: </b>{trip.departingFlight.link}</p>
                <p><b>Hotel Name: </b>{trip.stay.name}</p>
                <p><b>Hotel Cost / Night: </b>${trip.stay.dailyCost}</p>
                <p><b>Hotel Booking Link: </b>{trip.stay.link}</p>
                <p><b>Airport Transportation: </b></p>
                <p><b>Transportation Cost: </b></p>
            </div>
            <Button className="primary" onClick={forwardStage}>Submit</Button>
            <Button className="secondary" onClick={backStage}>Return to editing</Button>

        </div>
    )
}