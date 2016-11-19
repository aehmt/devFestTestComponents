import React from 'react'
import User from './user'
// const User = require('./user')

export default function FilteredUsers(props){
  let meh = ["user1", "user2"]
  return (
    <div id="filteredUsers">
      <User users={meh} />
    </div>
  )
}
