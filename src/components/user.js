import React from 'react'

// User should have following data:
// user: {
//    eventsToGoTo: [],
//    name:
//    image:
//    description:
//    searchingFor:
//  }

export default function User(props){
  return (
    <div id="foundUsers">
      {props.users.map((user,i) =>
        <div key={i} className = "user">
          <div className = "profilePhoto">
            <img src = "http://i.giphy.com/d2Z7Er7VSQPiPgiY.gif" />
          </div>
          <div className = "name">
            Name: Slim Shady
          </div>
          <div className = "desc">
            <p> Description: I am another user and I am interested in the sameEvent!!! woo! </p>
          </div>
        </div>
      )}
    </div>
  )
  // return (
  //   <div id="foundUsers">
  //     {props.users.map((user,i) =>
  //       <div key={i} className = "user">
  //         <div className = "profilePhoto">
  //           <img src = "http://i.giphy.com/d2Z7Er7VSQPiPgiY.gif" />
  //         </div>
  //         <div className = "name">
  //           Name: Slim Shady
  //         </div>
  //         <div className = "desc">
  //           <p> Description: I am another user and I am interested in the sameEvent!!! woo! </p>
  //         </div>
  //       </div>
  //     )}
  //   </div>
  // )
}
