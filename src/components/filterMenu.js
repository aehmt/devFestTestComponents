import React from 'react'

export default function FilterMenu(props){
  return(
    <div id = "lookingFor">
      <select onChange={props.chooseFilter} defaultValue='all'>
        <option value='all'>All</option>
          {props.filters.map(filter => <option key={filter} value={filter}>{filter}</option>)}
        </select>
    </div>
  )
}
