import "@aws-amplify/ui-react/styles.css";
import './App.css'
import Homepage from './components/Homepage'

import {
  withAuthenticator,
  View,
} from "@aws-amplify/ui-react";

function App({ signOut }) {
  const items = [
    {name: "Kevin", id: 7, date: new Date("07/07/2001")},
    {name: "Ryan", id: 43, date: new Date("05/16/2020")},
    {name: "Reisha", id: 5, date: new Date("06/07/2019")},
    {name: "Amir", id: 10, date: new Date("05/01/2018")},
    {name: "Tiffany", id: 15, date: new Date("10/05/2018")},
    {name: "Ari", id: 100, date: new Date("01/03/2021")},
    {name: "Zach", id: 150, date: new Date("02/15/2020")},
    {name: "Traveler Name", id: 156, date: new Date("11/22/2021")},
    {name: "Sam", id: 21, date: new Date("03/18/2022")},
    {name: "Olivia", id: 77, date: new Date("07/12/2021")},
    {name: "Luke", id: 32, date: new Date("09/06/2021")},
    {name: "Grace", id: 9, date: new Date("04/19/2022")},
    {name: "Ethan", id: 62, date: new Date("11/09/2021")},
    {name: "Sophia", id: 28, date: new Date("08/03/2021")},
    {name: "Jacob", id: 3, date: new Date("12/27/2021")},
    {name: "Isabella", id: 54, date: new Date("06/28/2021")},
    {name: "Mia", id: 39, date: new Date("01/10/2022")},
    {name: "Nathan", id: 17, date: new Date("05/29/2022")}
  ]

  const sortedItems = items.sort((a, b) => new Date(a.date) - new Date(b.date));

  return (
    <View className="App">
      <Homepage items={sortedItems} signOut={signOut}/>
    </View>
  );
}

export default withAuthenticator(App);