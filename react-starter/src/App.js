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
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onChange(e.target.value);
  }

  render() {
    console.log(this.props);
    return ( 
      <li>
        Name: <input type="text" value={this.props.name} onChange={this.handleChange} />
      </li>
    );
  }
}

class ActorList extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
  }

  render() {
      console.log(this.props);
    /*var chips = [];
    this.props.actors.forEach(function(actor) {
      chips.push(<ActorChip actor={actor} key={actor.name} onChange={actor.handleChange} />);
    }); {chips}*/
    //console.log(chips);
    return (
      <ul className="ActorList">
        <ActorChip value={this.props.name} onChange={this.props.handleChange} />;
      </ul>
    );
  }
}

class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Please write an essay about your favorite DOM element.'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('An essay was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

class App extends Component {
  constructor(props) {
    super(props);
    /*this.state = {
      ACTORS: [
        {name: 'Actor A'},
        {name: 'Actor B'},
        {name: 'Actor C'}
      ]
      };*/
      this.state = {name: ''};
    this.handleChange = this.handleChange.bind(this);
  }
  
 
  handleChange(value) {
    this.setState({name: value});
  }
  /*
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
  }*/

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
          <ActorList value={this.state.name} onChange={this.handleChange}/>
        </div>
        <div>
          <EssayForm />
        </div>
      </div>
    );
  }
}

export default App;
