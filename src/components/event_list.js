import React from 'react';
import EventListItem from './event_list_item'
import EventDetail from './event_detail'
import InterestedButton from './interestedButton'
import FilteredUsers from './filteredUsers'

export default class EventList extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      showDetails: false,
      zoomTo: null,
      userDiv: false
    }
    this.showDetail = this.showDetail.bind(this)
    this.showUsers = this.showUsers.bind(this)
  }

  showDetail(ev){
    let zooming = ev.target
    this.setState({
      zoomTo: zooming,
      showDetails: true
    })
  }

  showUsers(ev){
    this.setState({
      userDiv: true
    })
  }

  render(){
    return (
      <div>
        <div>
          <ul>
            {this.props.events.map((event) => <div><EventListItem handleChoice={this.showDetail} event={event} key={event.id} /><InterestedButton handleUsers={this.showUsers}/></div>)}
            </ul>
        </div>
        <div>
          {this.state.showDetails ? <EventDetail stuff = {this.state.zoomTo}/> : ''}
        </div>
        <div>
          {this.state.userDiv ? <FilteredUsers going={this.props.interestedUsers} filter={this.props.filterBy}/>: ''}
        </div>
      </div>
    )
  }
}
