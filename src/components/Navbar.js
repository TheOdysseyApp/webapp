import {
    Card
  } from "@aws-amplify/ui-react";

function Navbar({ columnStart, columnEnd }) {
    return (
        <Card
          columnStart="1"
          columnEnd="2"
          rowStart="2"
          rowEnd="-1"
        >
          Nav
        </Card>
    )
}

export default Navbar;