import TravelerInfoPreview from "./TravelerInfoPreview";

import {
    Collection,
    Card,
    ScrollView
  } from "@aws-amplify/ui-react";

function Navbar({ items, selectNewTraveler }) {
    return (
      <ScrollView 
        width="100%" 
        height="100%" 
        maxWidth="580px" 
        columnStart="1"
        columnEnd="2"
        rowStart="2"
        rowEnd="-1"
      >
        <Collection
          items={items}
          gap="0px"
        >
          {/* For each item passed to Navbar, create a card object that contains a
          TravelerInfo component */}
          {(item, index) => (
              <TravelerInfoPreview item={item} key={index} onClick={() => selectNewTraveler(item)}/>
          )}
        </Collection>
      </ScrollView>
    )
}

export default Navbar;