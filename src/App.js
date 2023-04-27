// function App() {
//   return (
//     <div className="App">
//       Hello World test
//     </div>
//   );
// }

// export default App;
// import logo from "./logo.svg";

import "@aws-amplify/ui-react/styles.css";
import './App.css'
import Homepage from './components/Homepage'


import {
  withAuthenticator,
  Button,
  View,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  const items = []

  return (
    <View className="App">
      <Homepage />
      <Button onClick={signOut}>Sign Out</Button>
    </View>
  );
}

export default withAuthenticator(App);