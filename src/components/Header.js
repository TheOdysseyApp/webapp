import {
    Card,
    Button
  } from "@aws-amplify/ui-react";

function Header({ signOut }) {
    return (
        <Card
          columnStart="1"
          columnEnd="-1"
        >
          Header
        <Button onClick={signOut}>Sign Out</Button>

        </Card>
    )
}

export default Header;