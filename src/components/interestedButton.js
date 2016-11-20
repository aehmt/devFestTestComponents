import React from 'react'
import { pushData } from './firebase/firebase';

export default function InterestedButton(props){
  let thisUserWantsToGo = props.assignEmail;
  let thisEvent = props.assignEvent;
  function sendStuffToDB(){
    console.log(thisUserWantsToGo + " going to event # " + thisEvent)

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
