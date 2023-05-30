import {
    Card,
    Divider
  } from "@aws-amplify/ui-react";

import './ItinerariesCard.css'

function ItinerariesCard({ item, onClick, isSelected }) {
    return (
        <Card className={isSelected ? "ItinerariesCard selected" : "ItinerariesCard notSelected"} onClick={onClick}>
            <div className={isSelected ? "card-content selected" : "card-content"}>
                <div className="content">
                    <h4 className="ItinerariesCardName">{item.name}</h4>
                    <p className="ItinerariesCardDate">{item.date.toLocaleDateString()}</p>    

                    <p className="ItinerariesCardId"># {item.tripId}</p>
                    <p className="ItinerariesCardActivities">{item.activities.join(", ")}</p>
                </div>
            </div>
            <Divider className="ItinerariesListDivider" orientation="horizontal" />
        </Card>
    )
}

export default ItinerariesCard;