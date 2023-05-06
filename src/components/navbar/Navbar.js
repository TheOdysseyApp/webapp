import {
    Card,
    Button,
  } from "@aws-amplify/ui-react";

import './Navbar.css'

function Navbar({ signOut }) {
    return (
        <Card className="Navbar"
          rowStart="1"
          rowEnd="2"
          columnStart="1"
          columnEnd="-1"
        >
          <h4><b>Planner Dashboard</b></h4>
          <img alt="help" src="/images/logo.png" />
          <Button className="primary" onClick={signOut}>Log Out</Button>
          

        </Card>
    )
}

export default Navbar;