import TravelerInfo from "./TravelerInfo";

import {
    Collection,
    Card,
    ScrollView
  } from "@aws-amplify/ui-react";

function Navbar({ items }) {
    return (
      <ScrollView width="100%" height="100%" maxWidth="580px" columnStart="1"
      columnEnd="2"
      rowStart="2"
      rowEnd="-1">
          <Collection
            items={items}
            gap="0px"
          >
            {(item, index) => (
              <Card
                key={index}
              >
                <TravelerInfo item={item}/>
              </Card>
            )}
          </Collection>
        </ScrollView>
    )
}

export default Navbar;