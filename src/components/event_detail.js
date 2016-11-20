import React from 'react';
import InterestedButton from './interestedButton'
const EventDetail = (props) => {
  if (!props.event) {
    return <div>Loading...</div>
  }
  console.log(props.event)

  return (
      <div className="event-detail">
        <div className="title">{props.event.name.text}</div>
        <div className="embed-responsive embed-responsive-16by9">
          <img className="embed-responsive-item" src={props.event.logo.url}></img>
        </div>
        <div className="details">
          <div>{props.event.description.text}</div>
        </div>
        <div className="buttonDiv">
          <InterestedButton assignEmail = {props.userId.email} assignEvent={props.event.id}/>
        </div>
      </div>
  );
};

export default EventDetail;
