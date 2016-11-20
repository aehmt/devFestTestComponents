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
      <div>
        <form className="search-container">
          <div className="row">
          <div className="col-md-2">
            <a href="#"><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
            </div>
            <div className="col-md-8">
            Event:<input type="text" id="search-bar" placeholder="What can I help you with today?" value={this.state.term} onChange={event => this.onInputChange(event.target.value, this.state.location)} />
            Location:<input type="text" id="location-search-bar" value={this.state.location} onChange={event => this.onInputChange(this.state.term, event.target.value)} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;



