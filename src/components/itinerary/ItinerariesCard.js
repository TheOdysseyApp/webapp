import { Card, Divider } from "@aws-amplify/ui-react";
import './ItinerariesCard.css'

function ItinerariesCard({ item, onClick, isSelected }) {
    return (
        <Card className={isSelected ? "itineraries-card selected" : "itineraries-card notSelected"} onClick={onClick}>
            <div className={isSelected ? "card-content selected" : "card-content"}>
                <div className="content">
                    <h4 className="itineraries-card-name">{item.name}</h4>
                    <p className="itineraries-card-date">{item.date.toLocaleDateString()}</p>    

                    <p className="itineraries-card-id"># {item.tripId}</p>
                    <p className="itineraries-card-activities">{item.activities.join(", ")}</p>
                </div>
            </div>
            <Divider className="itineraries-list-divider" orientation="horizontal" />
        </Card>
    )
}

export default ItinerariesCard;