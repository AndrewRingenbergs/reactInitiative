import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ActorList from './ActorList/ActorList.js';
import InitiativeTrack from './InitiativeTracker/InitiativeTracker.js'
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
    constructor(props) {
    super(props);
    this.state = {
        ACTORS: [
        {name: 'Actor A', initiative: 1, id: 0},
        {name: 'Actor B', initiative: 15, id: 1},
        {name: 'Actor C', initiative: 3, id: 2}
      ]
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange_init = this.handleChange_init.bind(this);
    this.handle_remove = this.handle_remove.bind(this);
    this.addActor = this.addActor.bind(this);
    this.restart_combat = this.restart_combat.bind(this);
  }
  
  handleChange(target, value) {
    const actors = this.state.ACTORS.slice();
    actors[this.state.ACTORS.indexOf(target)].name = value;
    this.setState({ACTORS: actors});
  }
  
  handleChange_init(target, value) {
    const actors = this.state.ACTORS.slice();
    actors[this.state.ACTORS.indexOf(target)].initiative = value;
    this.setState({ACTORS: actors});
  }

  handle_remove(target) {
    console.log('Removing (index ',this.state.ACTORS.indexOf(target),'): ', target, );
    const actors = this.state.ACTORS.slice();
    actors.splice(this.state.ACTORS.indexOf(target),1);
    this.setState({ACTORS: actors});
  }

  addActor() {
    let actors = this.state.ACTORS.slice();
    
    let maxId = 0;  // should probably improve this
    for (let i=0; i < actors.length; i++) {
      if (actors[i].id > maxId) { maxId = actors[i].id }
    }
    let newId = maxId+1;

    actors.push({name: 'New Actor', initiative: '', id: newId});
    this.setState({ACTORS: actors});

  }

  restart_combat() {
    const actors = this.state.ACTORS.slice();
    actors.forEach(function(actor) {
      actor.initiative = '';
    });
    this.setState({ACTORS: actors});
  }

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
          <InitiativeTrack ACTORS={this.state.ACTORS} restart_combat={this.restart_combat} />
        </div>
        <div>
          <ActorList ACTORS={this.state.ACTORS} handleChange={this.handleChange} handleChange_init={this.handleChange_init} handle_remove={this.handle_remove} addActor={this.addActor} />
        </div>
      </div>
    );
  }
}

export default App;
