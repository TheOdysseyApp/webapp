import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@aws-amplify/ui-react/styles.css";
import './App.css';
import Homepage from "../src/pages/Homepage/Homepage";

import {
  withAuthenticator,
  View,
} from "@aws-amplify/ui-react";
// // Impose a condition that the email must end with "@odyssey.com"
// if (!email.endsWith("@odyssey.com")) {
//   const error = new Error(": Please enter an email ending in @odyssey.com");
//   // Return the error to Amazon Cognito
//   callback(error, event);
// } else {
//   // Return the event object to Amazon Cognito
//   callback(null, event);
// }
function App({ signOut }) {

  return (
    <View className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage signOut={signOut}/>}/>
        </Routes>
      </BrowserRouter>
    </View>
  );
}

export default withAuthenticator(App);