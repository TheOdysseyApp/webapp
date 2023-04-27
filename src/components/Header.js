import {
    Card
  } from "@aws-amplify/ui-react";

function Header({ columnStart, columnEnd }) {
    return (
        <Card
          columnStart="1"
          columnEnd="-1"
        >
          Header
        </Card>
    )
}

export default Header;