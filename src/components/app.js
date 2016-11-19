<<<<<<< Updated upstream
import React from 'react'
import Events from './events'
import FilteredUsers from './filteredUsers'
import React, { Component } from 'react';
import SearchBar from './search_bar.js';
import EventList from './event_list.js';
import axios from 'axios';
import _ from 'lodash'

export default class App extends React.Component{
  constructor(props){
    super(props);
    let choice = this.props.index
    this.state = {
      index: choice,
      events: []
    }
    this.eventSearch('karaoke')
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
    return (
      <div>
        <SearchBar onSearchTermChange={eventSearch} />  
        <EventList events={this.state.events} />
      </div>
    )
  }
}
