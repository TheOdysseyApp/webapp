import {
    Card
  } from "@aws-amplify/ui-react";

function TravelerInfoPreview({ item, onClick, isSelected }) {
    const bgColor = isSelected ? "gray" : "white"

    return (
        <Card onClick={onClick} style={{backgroundColor: bgColor }}>
            <p>Name: {item.name}</p>
            <p>ID: {item.id}</p>
            <p>Date: {item.date}</p>    
        </Card>
    )
}

export default TravelerInfoPreview;