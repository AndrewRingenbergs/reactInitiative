import React, { PropTypes } from 'react';
import './ActorList.css';


class ActorChip extends React.Component {
  render() {
    return ( 
      <li className="ActorChip">
        <span className="imgActor"></span>
        <span className="PropertyList">
          <span className="PropertyEntry">
            <span className="PropertyLabel">Name :</span>
            <input type="text" value={this.props.name} onChange={(e) => this.props.updateName(e.target.value) } />
          </span>
          <span className="PropertyEntry">
            <span className="PropertyLabel">Initiative: </span>
            <input type="number" value={this.props.initiative} onChange={(e) => this.props.updateInitiative(e.target.value) } />
          </span>
        </span>
        <span className="btn-remove" onClick={this.props.removeActor}> X </span>
      </li>
    );
  }
}

ActorChip.PropTypes = {
  updateName: PropTypes.func.isRequired,
  updateInitiative: PropTypes.func.isRequired,
  removeActor: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  initiative: PropTypes.number.isRequired
  }

export default ActorChip;