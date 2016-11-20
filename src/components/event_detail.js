import React from 'react';

const EventDetail = ({event}) => {
  if (!event) {
    return <div>Loading...</div>
  }

  const eventId = event

  return (
    <div className="event-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={event}></iframe>
      </div>
      <div className="details">
        <div>{event}</div>
        <div>{event}</div>
      </div>
    </div>
  );
};

export default EventDetail;
