import { REMOVE_ACTOR, ADD_ACTOR, UPDATE_NAME, UPDATE_INITIATIVE } from '../actions';

const initialState =  {
  ACTORS: [
        {name: 'Actor A', initiative: 1, id: 0},
        {name: 'Actor B', initiative: 15, id: 1},
        {name: 'Actor d', initiative: 3, id: 2}
      ]
};

const detail = (state = {}, action) => {
  switch (action.type) {
    case 'REMOVE_ACTOR':
        let newActorsList = state.ACTORS.slice();
      console.log('remove action triggered', newActorsList, newActorsList.indexOf(action.payload));
      if (state.ACTORS.indexOf(action.payload) > -1) {
          newActorsList.splice(state.ACTORS.indexOf(action.payload), 1);
        return newActorsList;
      }
      else { return state.ACTORS };
    case 'ADD_ACTOR':
      {
        console.log('add actor');
        let actors = state.ACTORS.slice();
        
        let maxId = 0;  // should probably improve this
        for (let i=0; i < actors.length; i++) {
          if (actors[i].id > maxId) { maxId = actors[i].id }
        }
        let newId = maxId+1;

        actors.push({name: 'New Actor', initiative: '', id: newId});

        return actors;
      }
    case 'UPDATE_NAME':
      {
        const actors = state.ACTORS.slice();
        actors[state.ACTORS.indexOf(action.target)].name = action.payload;
        return actors;
      }
    case 'UPDATE_INITIATIVE':
      {
        const actors = state.ACTORS.slice();
        if (Number.isInteger(parseInt(action.payload))) {
          actors[state.ACTORS.indexOf(action.target)].initiative = parseInt(action.payload);
        }
        else {
          actors[state.ACTORS.indexOf(action.target)].initiative = "";
        }        
        return actors;
      }
    default:
      return state
  }
}

export default function actorsReducer(state = initialState, action) {
  switch (action.type) {
    case REMOVE_ACTOR:
      return {
          ...state, ACTORS: detail(state, action)
      };
    case ADD_ACTOR:
      return {
          ...state, ACTORS: detail(state, action)
      };
    case UPDATE_NAME:
      return {
        ...state, ACTORS: detail(state, action) 
    }
    case UPDATE_INITIATIVE:
      return {
        ...state, ACTORS: detail(state, action) 
    }
    default:
      return state;
  }
}

 /* 
const actors = this.state.ACTORS.slice();
    actors[this.state.ACTORS.indexOf(target)].initiative = value;
*/