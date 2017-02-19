import React, { Component } from 'react';
import './ActorList.css';


class ActorChip extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange_init = this.handleChange_init.bind(this);
  }

  handleChange(e) {
    console.log('change in: ',this.props.actor.id,' to ',e.target.value);
    this.props.handleChange(this.props.actor.id,e.target.value);
  }

  handleChange_init(e) {
    console.log(this.props.actor.id,': initiative change to: ',e.target.value);
    this.props.handleChange_init(this.props.actor.id,e.target.value);
  }

  render() {
    console.log('ActorChip: ',this.props);
    return ( 
      <li className="ActorChip">
        <span className="imgActor"></span>
        <span className="PropertyList">
          <span className="PropertyEntry">
            <span className="PropertyLabel">Name :</span>
            <input type="text" value={this.props.actor.name} onChange={this.handleChange} />
          </span>
          <span className="PropertyEntry">
            <span className="PropertyLabel">Initiative: </span>
            <input type="number" value={this.props.actor.initiative} onChange={this.handleChange_init} />
          </span>
        </span>
      </li>
    );
  }
}

class ActorList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        ACTORS: [
        {name: 'Actor A', initiative: 1, id: 0},
        {name: 'Actor B', initiative: 2, id: 1},
        {name: 'Actor C', initiative: 3, id: 2}
      ]
      };
    this.handleChange = this.handleChange.bind(this);
    this.handleChange_init = this.handleChange_init.bind(this);
  }
  
  handleChange(id, value) {
    const actors = this.state.ACTORS.slice();
    actors[id].name = value;
    this.setState({ACTORS: actors});
  }
  
  handleChange_init(id, value) {
    const actors = this.state.ACTORS.slice();
    actors[id].initiative = value;
    this.setState({ACTORS: actors});
  }

  render() {
  
    var chips = [];
    
    var testfunction = this.handleChange; // why do i have to do this?
    var fn_handleChange_init = this.handleChange_init;

    console.log(this.state.ACTORS);
    this.state.ACTORS.forEach(function(actor) {
      chips.push(<ActorChip actor={actor} key={actor.id} handleChange={testfunction} handleChange_init={fn_handleChange_init} />);
    });
    return (
      <div>    
        <div className="panel-header">
          <div className="inner-panel-header">
            <h1 className="panel-header-title">Character List</h1>
          </div>
        </div>
        <ul className="ActorList">
          {chips}
        </ul>
      </div>
    );
  }
}

export default ActorList;