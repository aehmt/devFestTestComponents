import React from 'react'
import User from './user'

export default function FilteredUsers(props){

  ////Testing purposes only, uncomment   // let usersGoing = props.going below when ready
  let usersGoing = [
    {name: "Slim Shady",
    imageUrl: "http://i.giphy.com/d2Z7Er7VSQPiPgiY.gif",
    description: "I an anon user and I am interested in this Event!!! woo!",
    lookingFor: "friends"},
   {name: "Slim Sunny",
   imageUrl: "http://i.imgur.com/WHnuA2O.gif",
   description: "I am another user and I am interested in the sameEvent!!! woo!",
  lookingFor: "date"}
 ]

  let lookingFor = props.filter
  // let usersGoing = props.going

  let filteredUsers = (lookingFor === 'all' || !props.filter) ? usersGoing :
   usersGoing.filter(user => user.lookingFor == lookingFor);


  return (
    <div id="filteredUsers">
      <User users={filteredUsers} />
    </div>
  )
}
