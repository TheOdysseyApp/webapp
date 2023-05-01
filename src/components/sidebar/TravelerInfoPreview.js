import {
    Card
  } from "@aws-amplify/ui-react";

import './TravelerInfoPreview.css'

function TravelerInfoPreview({ item, onClick, isSelected }) {
    const bgColor = isSelected ? "#5F7E96" : "#FDF7FA"
    const color = isSelected ? "#FDF7FA" : "#000000"

    return (
        <Card className="TravelerInfoPreview" onClick={onClick} style={{ backgroundColor: bgColor, color: color }}>
            <h4 className="TravelerInfoPreviewName">{item.name}</h4>
            <p className="TravelerInfoPreviewDate">{item.date}</p>    

            <p className="TravelerInfoPreviewId"># {item.id}</p>
            <p className="TravelerInfoPreviewActivities">Desired Activites: Activities</p>
        </Card>
    )
}

export default TravelerInfoPreview;