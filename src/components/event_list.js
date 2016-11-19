import React from 'react';
import EventListItem from './event_list_item'

const EventList = (props) => {
  const events = props.events.map((event) => {
    return (
      <EventListItem event={event} key={event.id} />
    )
  })
  return (
    <ul>
      {events} 
    </ul>
  )
}

export default EventList;
