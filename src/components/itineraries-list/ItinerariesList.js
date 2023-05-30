import ItinerariesCard from "./ItinerariesCard";
import './ItinerariesList.css'

import {
    Collection,
    ScrollView
  } from "@aws-amplify/ui-react";

function ItinerariesList({ previews, currentTripId, setCurrentTripId, resetStage }) {
    const handleItemClick = (preview) => {
      setCurrentTripId(currentTripId === preview.tripId ? null : preview.tripId)
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
        { previews !== null ?
          <div className="list-content">
            <div className="load-list">
              <img alt='loading' src='/images/loading.gif' className="fade"></img>
            </div>
            <Collection
              items={previews}
              gap="0px"
            >
            {/* For each item passed to Navbar, create a card object that contains a
            TravelerInfo component */}
            {(preview, index) => (
                <ItinerariesCard 
                item={preview} 
                key={index} 
                onClick={() => handleItemClick(preview, index)}
                isSelected={preview.tripId === currentTripId}
                />
            )}
            </Collection>
          </div> :
          <div className="list-content">
            <div className="load-list">
              <img alt='loading' src='/images/loading.gif'></img>
            </div>
          </div>
        }
      </ScrollView>
    )
}

export default ItinerariesList;