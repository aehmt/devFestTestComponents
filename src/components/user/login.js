import React, { Component } from 'react';
import { signupUser, loginUser, logoutUser, currentUser } from '../firebase/firebase';

export default class Login extends React.Component{
	constructor() {
		super();
    this.state = {
      email: '',
      password: '',
      currentUser: ''
    };
  }

  // This will be called when the user clicks on the login button
  signup(e) {
    e.preventDefault();
    signupUser(this.state.email, this.state.password);
  }

  login(e) {
    e.preventDefault();
    loginUser(this.state.email, this.state.password, this.state.currentUser);
  }

  logout(e) {
    e.preventDefault();
    logoutUser();
  }

  handleInputChange(name, e) {
    var change = {};
    change[name] = e.target.value;
    this.setState(change);
  }

  resetState() {
  	this.setState({});
  }

  render() {
    return (
    	<div>
	      <form role="form">
	        <div className="form-group">
	          <input type="email" 
	          				onChange={this.handleInputChange.bind(this, 'email')}
										value={this.state.email} placeholder="Email" />
	          <input type="password" 
	          				onChange={this.handleInputChange.bind(this, 'password')}
										value={this.state.password} placeholder="Password" />
	        </div>
	        <button type="submit" onClick={this.signup.bind(this)}>Sign up</button>
	        <button type="submit" onClick={this.login.bind(this)}>Login</button>
	        <button type="submit" onClick={this.logout.bind(this)}>Log out</button>
	      </form>
    	</div>
    );
  }
}