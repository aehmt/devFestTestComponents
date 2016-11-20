import React from 'react'
import { pushData } from './firebase/firebase';


// var config = {
//     apiKey: "AIzaSyB9jSHM0DXvi-dX0hJ0P675ndDbzqp8ZP0",
//     authDomain: "thoughtdot-e75ba.firebaseapp.com",
//     databaseURL: "https://thoughtdot-e75ba.firebaseio.com",
//     storageBucket: "thoughtdot-e75ba.appspot.com",
//     messagingSenderId: "396643647275"
// };
// firebase.initializeApp(config);

export default function InterestedButton(props){
  let thisUserWantsToGo = props.assignEmail;
  let thisEvent = props.assignEvent;
  function sendStuffToDB(){
    console.log(thisUserWantsToGo + " going to event # " + thisEvent)
    // console.log(firebase)

    let filters = ["friends", "date", "group"]
    let rndPurpose = filters[Math.floor(Math.random()*3)];

    let input = pushData.ref('goingTo');
    let trial = input.push()
    trial.set({
      email: thisUserWantsToGo,
      eventId: thisEvent,
      lookingFor: rndPurpose
    });
    var something = trial.toString()
    console.log("Consoling something " + something);
  }
  return (
    <button onClick={sendStuffToDB}>
      Interested?
    </button>
  )
}
