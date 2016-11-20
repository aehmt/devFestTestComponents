import React from 'react';

const EventDetail = ({event}) => {
  if (!event) {
    return <div>Loading...</div>
  }
  console.log(event)
  return (
      <div className="event-detail">
        <div className="title">{event.name.text}</div>
        <div className="embed-responsive embed-responsive-16by9">
          {event.logo ? <img className="embed-responsive-item" src={event.logo.url}></img> : <img className="embed-responsive-item" src='http://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg'></img> }
        </div>
        <div className="details">
          <div>{event.description.text}</div>
        </div>
      </div>
  );
};

export default EventDetail;
