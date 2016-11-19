import React from 'react';

const EventListItem = (props) => {
  const event = props.event

    return (
      <li>{event.name.text}</li>
    )
}

export default EventListItem;
