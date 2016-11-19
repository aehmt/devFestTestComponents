import React from 'react'

export default class App extends React.Component{
  constructor(props){
    super(props);
    let choice = this.props.index
    this.state = {
      index: choice
    }
  }
  render(){
    if (this.state.index){
      return <div>Hello</div>
    } else {
      return <div>Here Be Dragons</div>
    }

  }
}
