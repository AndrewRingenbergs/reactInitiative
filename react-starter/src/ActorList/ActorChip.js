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
    //console.log('change in: ',this.props.actor,' to ',e.target.value);
    this.props.handleChange(this.props.actor,e.target.value);
  }

  handleChange_init(e) {
    /*console.log(this.props.actor,': initiative change to: ',e.target.value);
    if (Number.isInteger(parseInt(e.target.value))) {
      this.props.handleChange_init(this.props.actor,parseInt(e.target.value));
    }*/
    this.props.handleChange_init(this.props.actor,e.target.value);
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

export default ActorChip;