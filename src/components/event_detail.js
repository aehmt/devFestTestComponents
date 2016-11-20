import React from 'react';

const EventDetail = ({event}) => {
  if (!event) {
    return <div>Loading...</div>
  }
  console.log(event)

  return (
      <div className="event-detail col-md-8">
        <div className="embed-responsive embed-responsive-16by9">
          <iframe className="embed-responsive-item" src={event.logo.url}></iframe>
        </div>
        <div className="details">
          <div>{event.name.text}</div>
          <div>{event.description.text}</div>
        </div>
      </div>
  );
};

export default EventDetail;
