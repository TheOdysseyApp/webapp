import ItinerariesCard from "./ItinerariesCard";
import './ItinerariesList.css'

import { useState } from 'react';

import {
    Collection,
    ScrollView,
    Divider
  } from "@aws-amplify/ui-react";

function ItinerariesList({ items, setCurrentTraveler }) {
    const [selectedItemIndex, setSelectedItemIndex] = useState(null)

    const handleItemClick = (item, index) => {
      if (selectedItemIndex === index ) {
        setCurrentTraveler(null)
        setSelectedItemIndex(null);
      }
      else {
        setCurrentTraveler(item)
        setSelectedItemIndex(index)  
      }
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
          items={items}
          gap="0px"
        >
          {/* For each item passed to Navbar, create a card object that contains a
          TravelerInfo component */}
          {(item, index) => (
            <>
              <ItinerariesCard 
                item={item} 
                key={index} 
                onClick={() => handleItemClick(item, index)}
                isSelected={index === selectedItemIndex}
              />
              <Divider className="ItinerariesListDivider" orientation="horizontal" />
            </>
          )}
        </Collection>
      </ScrollView>
    )
}

export default ItinerariesList;