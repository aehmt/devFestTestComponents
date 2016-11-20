import React from 'react';

const EventListItem = (props) => {
  const event = props.event

    return (
      <li onClick={props.handleChoice}>{event.name.text}</li>
    )
}

export default EventListItem;
