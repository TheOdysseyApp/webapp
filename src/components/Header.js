import {
    Card,
    Button,
    Image
  } from "@aws-amplify/ui-react";

function Header({ signOut }) {
    return (
        <Card className="Header"
          rowStart="1"
          rowEnd="2"
          columnStart="1"
          columnEnd="-1"
        >
          Header
          <Image alt="Odyssey Logo" src="src/components/logo.jpg"/>
          <Button onClick={signOut}>Sign Out</Button>

        </Card>
    )
}

export default Header;