import ItinerariesCard from "./ItinerariesCard";
import './ItinerariesList.css'
import React, { useState } from 'react';
import { Collection, ScrollView, Button } from "@aws-amplify/ui-react";

export default function ItinerariesList({ previews, completedPreviews, currentTripId, setCurrentTripId, resetStage }) {
    const [showCompleted, setShowCompleted] = useState(false);

    const handleItemClick = (preview) => {
      setCurrentTripId(currentTripId === preview.tripId ? null : preview.tripId)
      resetStage();
    }

    function toggleCompleted() {
        setShowCompleted(!showCompleted);
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
            className="itineraries-list"
        >
        { previews !== null ?
          <div className="list-content">
            <div className="load-list">
              <img alt='loading' src='/images/loading.gif' className="fade"></img>
            </div>
            <div className="btn-cont" onClick={toggleCompleted}>
              <Button className="text-btn">{showCompleted ? "Hide completed trips" : "Show completed trips"}</Button>
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
            
            { showCompleted ?
                <div className="completed">
                <h3>Completed Trips</h3>
                <Collection
                    items={completedPreviews}
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
                </div>
                : null
            }
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