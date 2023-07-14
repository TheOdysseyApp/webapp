import { Card, Button } from "@aws-amplify/ui-react";
import './Navbar.css'

export const Navbar = ({ signOut }) => {
    return (
        <Card className="navbar"
          rowStart="1"
          rowEnd="2"
          columnStart="1"
          columnEnd="-1"
        >
          <h4>Planner Dashboard</h4>
          <img alt="logo" src="/images/logo.png" />
          <Button className="primary" onClick={signOut}>Log Out</Button>
          

        </Card>
    )
}
