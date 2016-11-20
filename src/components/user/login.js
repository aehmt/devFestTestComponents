import React, { Component } from 'react';
import { signupUser, loginUser, logoutUser, currentUser } from '../firebase/firebase';

export default class Login extends React.Component{
	constructor() {
		super();
    this.state = {
      email: '',
      password: ''
    };
  }

  // This will be called when the user clicks on the login button
  signup(e) {
    e.preventDefault();
    signupUser(this.state.email, this.state.password);
  }

  login(e) {
    e.preventDefault();
    loginUser(this.state.email, this.state.password);
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
    	<div id="login" className="container" style={{marginTop: '200px', width: '70%'}}>
        <form style={{margin: '100px 200px 100px', backgroundColor: 'white', color: 'white'}}>
          <div className="form-group label-static is-empty">
            <label className="control-label" htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Your email"
                    onChange={this.handleInputChange.bind(this, 'email')}
                    value={this.state.email}
            />
          </div>
          <div className="form-group label-static">
            <label className="control-label" htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Your password"
                    onChange={this.handleInputChange.bind(this, 'password')}
                    value={this.state.password}
            />
          </div>
          <button type="submit" className="btn btn-raised btn-primary" onClick={this.login.bind(this)}>Login</button>        
          <button type="submit" className="btn btn-raised btn-info" onClick={this.signup.bind(this)}>Sign up</button>
          </form>

    	</div>
    );
  }
}