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
      <div>
        <form className="search-container">
          <a href="#"><img className="search-icon" src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"/></a>
          <input type="text" id="search-bar" placeholder="What can I help you with today?"/>
        </form>
      </div>
    );
  }
}

export default SearchBar;
