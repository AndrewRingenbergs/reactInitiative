import React, { PropTypes } from 'react';
import ActorChip from './ActorChip.js'
import './ActorList.css';

class ActorList extends React.Component {
 
  render() {
  
    var chips = [];

    chips = this.props.ACTORS.map(actor => 
      <ActorChip 
        key={actor.id} 
        {...actor} 
        updateName={(val) => this.props.updateName(actor,val)} 
        updateInitiative={(val) => this.props.updateInitiative(actor,val)} 
        removeActor={() => this.props.removeActor(actor)}
      />);

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
  updateName: PropTypes.func.isRequired,
  updateInitiative: PropTypes.func.isRequired,
  removeActor: PropTypes.func.isRequired,
  addActor: PropTypes.func.isRequired,
  ACTORS: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    initiative: PropTypes.number.isRequired})).isRequired
  }

export default ActorList;