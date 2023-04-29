import {
    View
  } from "@aws-amplify/ui-react";

function TravelerInfoPreview({ item }) {
    return (
        <View>
            <p>Name: {item.name}</p>
            <p>ID: {item.id}</p>
            <p>Date: {item.date}</p>    
        </View>
    )
}

export default TravelerInfoPreview;