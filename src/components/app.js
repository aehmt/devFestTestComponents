import React from 'react'
import Events from './events'
import FilteredUsers from './filteredUsers'

export default class App extends React.Component{
  constructor(props){
    super(props);
    let choice = this.props.index
    this.state = {
      index: choice,
      events: [],
      selectedEvent: null,
      modalIsOpen: false
    }
  }

  openModal(event) {
    this.setState({
      modalIsOpen: true,
      selectedEvent: event
    });
  }

  closeModal() {
    this.setState({
      modalIsOpen: false,
      selectedEvent: null
    });
  }

  render(){
    if (this.state.index){
      return (
        <div id="eventContainer">
          <p>Events for you to Check out:</p>
          <Events events={this.state.events}/>
        </div>
      )
    } else {
      return (
        <div id = "userMenu">
          <FilteredUsers />
        </div>
      )
    }

  }
}
