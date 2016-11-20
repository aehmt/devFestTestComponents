import React from 'react';

const EventListItem = (props) => {
  const event = props.event

    return (
      <li onClick={() => onEventSelect(event)} className="list-group-item">
        <div className="video-list media">
          <div className="media-left">
            <img className="media-object" src="" />
          </div>
          <div className="media-body">
            <div className="media-heading">{event.name.text}</div> 
          </div>
        </div>
      </li>
    )
}

export default EventListItem;
