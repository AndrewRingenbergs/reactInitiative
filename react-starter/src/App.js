import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
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

class ActorChip extends React.Component {
  render() {
    return <li>{this.props.actor.name}</li>;
  }
}

class ActorList extends React.Component {
  render() {
    var chips = [];
    this.props.actors.forEach(function(actor) {
      chips.push(<ActorChip actor={actor} key={actor.name} />);
    });
    console.log(chips);
    return (
      <ul className="ActorList">
        {chips}
      </ul>
    );
  }
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      ACTORS: [
        {name: 'Actor A'},
        {name: 'Actor B'},
        {name: 'Actor C'}
      ],
    };
  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    
    // Try to set
    rootRef.set({
      ACTORS: [
        {name: 'New A'},
        {name: 'New B'}
      ]
    });
    
    // Read on change
     rootRef.child('ACTORS').on('value', snap => {
      this.setState( { 
        ACTORS: snap.val()
      });
    });
  }

  render() {
      console.log('firebase',this.state);
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
          <ActorList actors={this.state.ACTORS} />
        </div>
      </div>
    );
  }
}

export default App;
