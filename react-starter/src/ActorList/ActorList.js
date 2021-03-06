import React, { Component } from 'react';
import './ActorList.css';


class ActorChip extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleChange_init = this.handleChange_init.bind(this);
    this.handle_remove = this.handle_remove.bind(this);
  }

  handleChange(e) {
    console.log('change in: ',this.props.actor,' to ',e.target.value);
    this.props.handleChange(this.props.actor,e.target.value);
  }

  handleChange_init(e) {
    console.log(this.props.actor,': initiative change to: ',e.target.value);
    if (Number.isInteger(parseInt(e.target.value))) {
      this.props.handleChange_init(this.props.actor,parseInt(e.target.value));
    }
  }

  handle_remove(e) {
    this.props.handle_remove(this.props.actor);
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
        <span className="btn-remove" onClick={this.handle_remove}> X </span>
      </li>
    );
  }
}

class ActorList extends React.Component {
  constructor(props) {
    super(props);
    //this.handleChange = this.handleChange.bind(this);
    //this.handleChange_init = this.handleChange_init.bind(this);
    //this.handle_remove = this.handle_remove.bind(this);
  }
  
  /*constructor(props) {
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
    this.handle_remove = this.handle_remove.bind(this);
    this.addActor = this.addActor.bind(this);
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

  }*/

  render() {
  
    var chips = [];
    
    var testfunction = this.props.handleChange; // why do i have to do this?
    var fn_handleChange_init = this.props.handleChange_init;
    var fn_handle_remove = this.props.handle_remove;

    console.log(this.props.ACTORS);
    this.props.ACTORS.forEach(function(actor) {
      chips.push(<ActorChip actor={actor} key={actor.id} handleChange={testfunction} handleChange_init={fn_handleChange_init} handle_remove={fn_handle_remove}/>);
    });
    return (
      <div>    
        <div className="panel-header">
          <div className="inner-panel-header">
            <h1 className="panel-header-title">Character List</h1>
          </div>
        </div>
        <div className="btn-newActor" onClick={this.props.addActor} >Add Actor</div>
        <ul className="ActorList">
          {chips}
        </ul>
      </div>
    );
  }
}

export default ActorList;