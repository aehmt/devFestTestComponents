import React from 'react';
import EventListItem from './event_list_item'

const EventList = (props) => {
  const events = props.events.map((event) => {
    return (
      <EventListItem onEventSelect={props.onEventSelect} event={event} key={event.id} />
    )
  })
  return (
    <ul className="list-group">
      {events} 
    </ul>
  )
}

export default EventList;



// import React from 'react';
// import EventListItem from './event_list_item'
// import EventDetail from './event_detail'
// import InterestedButton from './interestedButton'
// export default class EventList extends React.Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       showDetails: false,
//       zoomTo: null
//     }
//     this.showDetail = this.showDetail.bind(this)
//   }

//   showDetail(ev){
//     let zooming = ev.target
//     this.setState({
//       zoomTo: zooming,
//       showDetails: true
//     })
//   }

//   render(){
//     return (
//       <div>
//         <div>
//           <ul>
//             {this.props.events.map((event) => <div><EventListItem handleChoice={this.showDetail} event={event} key={event.id} /><InterestedButton /></div>)}
//             </ul>
//         </div>
//         <div>
//           {this.state.showDetails ? <EventDetail stuff = {this.state.zoomTo}/> : ''}
//         </div>
//       </div>
//     )
//   }
// }
