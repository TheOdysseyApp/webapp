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
  View,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  const items = [
    {name: "Kevin", id: 7, date: "today"},
    {name: "Ryan", id: 43, date: "04/27/2023"},
    {name: "Reisha", id: 5, date: "04/26/2023"},
    {name: "Amir", id: 10, date: "04/21/2023"},
    {name: "Tiffany", id: 15, date: "03/12/2022"},
  ]
  console.log(items)

  return (
    <View className="App">
      <Homepage items={items} signOut={signOut}/>
    </View>
  );
}

export default withAuthenticator(App);