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
    console.log(thisUserWantsToGo + " going to event # " + props.assignEvent)
    // console.log(firebase)

    let input = pushData.ref('goingTo');
    let trial = input.push()
    trial.set({
      email: thisUserWantsToGo,
      eventId: thisEvent
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
