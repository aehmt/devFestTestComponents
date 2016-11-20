import React, { Component } from 'react'
import $ from 'jquery'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { term: 'karaoke', location: 'New York' };
  }


  onInputChange(term, location) {
    this.setState({term, location});
    this.props.onSearchTermChange(term, location);
  }
  
  render() {
    return (
      <div className="search-bar">
        Event:<input id="search-bar" value={this.state.term} onChange={event => this.onInputChange(event.target.value, this.state.location)} />
        <br></br>
        Location:<input id="location-search-bar" value={this.state.location} onChange={event => this.onInputChange(this.state.term, event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
