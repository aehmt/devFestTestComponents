import React, { Component } from 'react'
import $ from 'jquery'

class SearchBar extends Component {
  constructor(props) {
    super(props);
    
    this.state = { term: 'karaoke' };
  }


  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
  
  render() {
    return (
      <div className="search-bar">
        <input id="search-bar" value={this.state.term} onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  }
}

export default SearchBar;
