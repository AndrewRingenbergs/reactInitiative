import React, { Component } from 'react';
import './InitiativeTracker.css';

class InitiativeTrack extends Component {
  constructor(props) {
    super(props);
    this.state = {
        initiativePass: 0,
        acted_list: [],
        active_actor_id: '',
        newRound: true
    };
    this.endTurn = this.endTurn.bind(this);
  }

  endTurn() {
    const actors = this.props.ACTORS.slice();
    let actorsValid = [];
    let acted_actors_list = this.state.acted_list.slice();
    let active_id = this.state.active_actor_id;
    let newRound = this.state.newRound;
    let newInitiativePass = this.state.initiativePass;

    actors.forEach(function(actor) {
        if (Number.isInteger(parseInt(actor.initiative, 10))) actorsValid.push(actor);
     });
        if ((newRound)&(actorsValid.length > 0)) {
            actors.sort(function (a, b) { return b.initiative - a.initiative; })
            active_id = actors[0].id;
            newRound = false;
            this.setState({active_actor_id: active_id});
        }
        else {
            // add old active_id to acted list
            acted_actors_list.push(active_id);
            this.setState({acted_list: acted_actors_list});

            // determine the next active actor

            active_id = '';
            actors.sort(function (a, b) { return b.initiative - a.initiative; })
            for (let a=0; a<actors.length; a++) {
                if ((active_id==='')&(Number.isInteger(parseInt(actors[a].initiative, 10)))&(actors[a].initiative>newInitiativePass*10)) {
                    if (acted_actors_list.indexOf(actors[a].id)===-1) {
                        active_id = actors[a].id;
                        break;
                    }
                }
            };

            // if no active_id found, start the next pass or round
            if (active_id==='') {
                acted_actors_list = [];

                newInitiativePass += 1;
                // find next valid actor
                for (let a=0; a<actors.length; a++) {
                    if ((active_id==='')&(Number.isInteger(parseInt(actors[a].initiative, 10)))&(actors[a].initiative>newInitiativePass*10)) {
                        if (acted_actors_list.indexOf(actors[a].id)===-1) {
                            active_id = actors[a].id;
                            break;
                        }
                    }
                };
                if (active_id==='') { // if no active id found, start new round
                    newInitiativePass = 0;
                    newRound = true;
                    this.props.restart_combat();
                }
            }

        }

            this.setState({
                active_actor_id: active_id,
                initiativePass: newInitiativePass,
                acted_list: acted_actors_list,
                newRound: newRound
            });

  }

  render() {
    let txtTurn = 'Start Round';
    if (this.state.newRound) txtTurn = 'Start Round';
    else txtTurn = 'End Turn';

    var chips = [];
    const actors = this.props.ACTORS.slice();
    const acted_list = this.state.acted_list;
    const active_id = this.state.active_actor_id;

    const initiativePassMod = this.state.initiativePass*10;
    actors.sort(function (a, b) { return b.initiative - a.initiative; })
    actors.forEach(function(actor) {

        let actedType = 'not_acted';

        if (Number.isInteger(actor.initiative)) {
            const currentInitiative = actor.initiative-initiativePassMod;
            if (currentInitiative>0) {

                if (actor.id===active_id) {
                    actedType = 'active';
                }
                else {
                    for (let i = 0; i < acted_list.length; i++) {
                        if (actor.id===acted_list[i]) {
                            actedType = 'acted';
                        }
                    }
                }

                chips.push(<li className='inititative-chip' key={actor.id} data-actedType={actedType} >{actor.name} - {currentInitiative}</li>);
            }
        }
    });
    return (
      <div>
        <div className="panel-header">
          <div className="inner-panel-header">
            <h1 className="panel-header-title">Initiative Track</h1>
          </div>
        </div>
        <div className="btn-endTurn" onClick={this.endTurn} >{txtTurn}</div>
        <ul className="ActorList">
          {chips}
        </ul>
      </div>
    );
  }
}

export default InitiativeTrack;
