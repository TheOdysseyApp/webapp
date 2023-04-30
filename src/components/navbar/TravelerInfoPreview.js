import {
    Card
  } from "@aws-amplify/ui-react";

function TravelerInfoPreview({ item, onClick }) {
    return (
        <Card onClick={onClick}>
            <p>Name: {item.name}</p>
            <p>ID: {item.id}</p>
            <p>Date: {item.date}</p>    
        </Card>
    )
}

export default TravelerInfoPreview;