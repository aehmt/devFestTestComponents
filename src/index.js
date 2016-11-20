import React from 'react';
import App from './components/app';
import ReactDOM from 'react-dom';
import { firebase } from './components/firebase/firebase';

ReactDOM.render(<App index={true} firebase={firebase()}/>, document.getElementById('main'));
