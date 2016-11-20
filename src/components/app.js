import FilteredUsers from './filteredUsers';
import React, { Component } from 'react';
import SearchBar from './search_bar.js';
import EventList from './event_list.js';
import axios from 'axios';
import _ from 'lodash';

import Login from './user/login'
import { currentUser } from './firebase/firebase';

export default class App extends React.Component{
  constructor(props){
    super(props);
    let choice = this.props.index
    this.state = {
      index: choice,
      events: [],
      interestedUsers: [],
      filterBy: null
    }
    this.eventSearch('karaoke')
  }
  
  componentDidMount(){
    this.loadStyleSheet('style', '/style/style.css');
  }

  componentWillMount() {
    const that = this;
    this.props.firebase.auth().onAuthStateChanged(function(user) {

      if (user) {
        // User is signed in.
        that.setState({currentUser: user})
      } else {
        // No user is signed in.
        that.setState({currentUser: null})
      }
    });
  }

  eventSearch(term) {
    const OAuth_token = 'FEELRVTAKH4YPZX4BKQT';
    var url = `https://www.eventbriteapi.com/v3/events/search/?q=${term}&token=${OAuth_token}`
    axios.get(url)
      .then((response) => {
        this.setState({
          events: response.data.events
        })
      })
      .catch(function (error) {
        console.log(error);
    });
  }

  render(){
    const eventSearch = _.debounce((term) => {this.eventSearch(term)}, 500);

    if (this.state.currentUser === null) {
      debugger;
      return (<Login />)
    } else {
      if (this.state.index){
        return (
          <div id="eventContainer">
            <p>Events for you to check out:</p>
            <SearchBar onSearchTermChange={eventSearch} />
            <EventList events={this.state.events} />
            <Login />
          </div>
        )
      } else {
        return (
          <div id = "userMenu">
            <FilteredUsers going={this.state.interestedUsers} filter={this.state.filterBy}/>
          </div>
        )
      }
    }
  }
}
