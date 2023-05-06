import {
    Card
  } from "@aws-amplify/ui-react";

import './ItinerariesCard.css'

function ItinerariesCard({ item, onClick, isSelected }) {

    return (
        <Card className={isSelected ? "ItinerariesCard selected" : "ItinerariesCard notSelected"} onClick={onClick}>
            <div className={isSelected ? "container selected" : "container"}>
                <div className="content">
                    <h4 className="ItinerariesCardName">{item.name}</h4>
                    <p className="ItinerariesCardDate">{item.date.toLocaleDateString()}</p>    

                    <p className="ItinerariesCardId"># {item.id}</p>
                    <p className="ItinerariesCardActivities">Desired Activites: Activities</p>
                </div>
            </div>
        </Card>
    )
}

export default ItinerariesCard;