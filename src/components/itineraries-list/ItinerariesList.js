import ItinerariesCard from "./ItinerariesCard";
import './ItinerariesList.css'

import {
    Collection,
    ScrollView,
    Divider
  } from "@aws-amplify/ui-react";

function ItinerariesList({ previews, currentTravelerId, setCurrentTravelerId, resetStage }) {

    const handleItemClick = (preview) => {
      setCurrentTravelerId(currentTravelerId === preview.id ? null : preview.id)
      resetStage();
    }

    return (
      <ScrollView 
        width="100%" 
        height="100%" 
        maxWidth="580px" 
        columnStart="1"
        columnEnd="2"
        rowStart="2"
        rowEnd="-1"
        className="ItinerariesList"
      >
        <Collection
          items={previews}
          gap="0px"
        >
          {/* For each item passed to Navbar, create a card object that contains a
          TravelerInfo component */}
          {(preview, index) => (
            <>
              <ItinerariesCard 
                item={preview} 
                key={index} 
                onClick={() => handleItemClick(preview, index)}
                isSelected={preview.id === currentTravelerId}
              />
              <Divider className="ItinerariesListDivider" orientation="horizontal" />
            </>
          )}
        </Collection>
      </ScrollView>
    )
}

export default ItinerariesList;