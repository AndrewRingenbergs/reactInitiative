import React, { Component, PropTypes } from 'react';
import ActorChip from './ActorChip.js'
import './ActorList.css';

class ActorList extends React.Component {
 
  render() {
  
    var chips = [];
    
    var testfunction = this.props.handleChange; // why do i have to do this?
    var fn_handleChange_init = this.props.handleChange_init;
    var fn_handle_remove = this.props.handle_remove;

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

ActorList.PropTypes = {
  ACTORS: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    initiative: PropTypes.number.isRequired})).isRequired
  }

export default ActorList;