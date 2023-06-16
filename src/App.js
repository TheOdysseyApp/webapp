import { BrowserRouter, Routes, Route } from "react-router-dom";

import "@aws-amplify/ui-react/styles.css";
import './App.css'
import Homepage from './pages/Homepage/Homepage'

import {
  withAuthenticator,
  View,
} from "@aws-amplify/ui-react";

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