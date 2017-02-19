import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActorList from './ActorList/ActorList.js'
import * as firebase from 'firebase';

// Initialize Firebase
  var config = {
    apiKey: "AIzaSyD6LM72rRoARVoOQuQ_cJG1vz2ccOWhKuk",
    authDomain: "reactinit-f76f4.firebaseapp.com",
    databaseURL: "https://reactinit-f76f4.firebaseio.com",
    storageBucket: "reactinit-f76f4.appspot.com",
    messagingSenderId: "48847842492"
  };
  firebase.initializeApp(config);

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div>
          <ActorList />
        </div>
      </div>
    );
  }
}

export default App;
