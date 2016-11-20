import React from 'react';
import EventListItem from './event_list_item'

const EventList = (props) => {
  const events = props.events.map((event) => {
    return (
      <EventListItem event={event} key={event.id} />
    )
  })
  return (
    <ul className="col-md-4 list-group">
      {events} 
    </ul>
  )
}

export default EventList;
