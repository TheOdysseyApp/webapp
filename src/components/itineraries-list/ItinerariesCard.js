import {
    Card
  } from "@aws-amplify/ui-react";

import './ItinerariesCard.css'

function ItinerariesCard({ item, onClick, isSelected }) {
    const bgColor = isSelected ? "#5F7E96" : "#FDF7FA"
    const color = isSelected ? "#FDF7FA" : "#000000"

    return (
        <Card className="ItinerariesCard" onClick={onClick} style={{ backgroundColor: bgColor, color: color }}>
            <h4 className="ItinerariesCardName">{item.name}</h4>
            <p className="ItinerariesCardDate">{item.date.toLocaleDateString()}</p>    

            <p className="ItinerariesCardId"># {item.id}</p>
            <p className="ItinerariesCardActivities">Desired Activites: Activities</p>
        </Card>
    )
}

export default ItinerariesCard;