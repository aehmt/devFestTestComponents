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
        <form className="form-inline">
          <div className="row">
            <div className="col-md-4 col-md-offset-3">
              <input type="text" id="search-bar" placeholder="What would you I like to do?" value={this.state.term} onChange={event => this.onInputChange(event.target.value, this.state.location)} />
            </div>
            <div className="col-md-2">
              <input type="text" id="search-bar" placeholder="Location" value={this.state.location} onChange={event => this.onInputChange(this.state.term, event.target.value)} />
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;



