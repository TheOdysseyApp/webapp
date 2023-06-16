import { Card, View, Grid } from "@aws-amplify/ui-react";
import CompareDestination from "../../../../components/TripOption/TripOption"
import './CompareTrips.css'

function CompareTrips({ currentTripId, traveler, trip, setCurrentDestination, completed, forwardStage }) {
	return (
		<Card
		columnStart="2"
		columnEnd="-1"
		className="compare-trips"
		>
		{
			(currentTripId && traveler && trip && trip !== "loading" && Object.keys(trip).length !== 0) ? 
			<View className="traveler-info-selected">
				<img alt='loading' src='/images/loading.gif' className="loading-traveler fade"/>
				<div className="header">
					<h1>{traveler.first_name + " " + traveler.last_name}</h1>
					<p>{`# ${traveler.id}`}</p>
					{/* We need to move this information into the traveler object as well
						which we need to contact backend team about */}
					<div>
					<p>Departing from: {traveler.departingFrom ? traveler.departingFrom : "Not provided"}</p>
					<p>Month of trip: {traveler.month ? traveler.month : "Not provided"}</p>
					<p>Number of Days: {traveler.duration ? traveler.duration : "Not provided"}</p>
					</div>
					<p>Desired activities: {traveler.activities ? traveler.activities.join(', ') : "Not provided"}</p>
					<p>Budget: ${traveler.minBudget}-${traveler.maxBudget}</p>
			
				</div>
				<Grid
				templateColumns="1fr 1fr 1fr"
				className="options"
				>
					<CompareDestination destination={trip.A} column={1} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} tripPlanned={completed}/>
					<CompareDestination destination={trip.B} column={2} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} tripPlanned={completed} />
					<CompareDestination destination={trip.C} column={3} setCurrentDestination={setCurrentDestination} forwardStage={forwardStage} tripPlanned={completed} style={{border: "none"}}/>
				</Grid>
			</View>
			: (trip && Object.keys(trip).length === 0) ? 
			<View className="traveler-info-unselected">
				<h3 className="noTraveler">Server error</h3>
			</View>
			: (trip === "loading") ?
			<View className="traveler-info-selected">
				<img alt='loading' src='/images/loading.gif' className="loading-traveler"/>
			</View>
			:
			<View className="traveler-info-unselected">
				<h3 className="noTraveler">Select a traveler to get started</h3>
			</View>
		}
		</Card>
	)
}

export default CompareTrips;
