import React from 'react';
import InterestedButton from './interestedButton'

const EventDetail = (props) => {
  if (!props.event) {
    return <div>Loading...</div>
  }
  console.log(props.event)
  return (
    <div className="event-detail">
      <div className="bs-component">
        <div className="jumbotron">
          <div className="title">{props.event.name.text}</div>
          <div className="embed-responsive embed-responsive-16by9">
            {props.event.logo ? <img className="embed-responsive-item" src={props.event.logo.url}></img> : <img className="embed-responsive-item" src='http://www.arabamerica.com/wp-content/themes/arabamerica/assets/img/thumbnail-default.jpg'></img> }
          </div>
          <div className="details">
            <InterestedButton assignEmail = {props.userId.email} assignEvent={props.event.id}/>
            <div>{props.event.description.text}</div>
            <div className="buttonDiv">
            </div>
          </div>
        </div>
      <div id="source-button" className="btn btn-primary btn-xs" style={{display: 'none'}}>&lt; &gt;</div></div>
    </div>
  );
};

export default EventDetail;
