//import { UPDATE_STATE } from '../actions';

const initialState =  {
  ACTORS: [
        {name: 'Actor A', initiative: 1, id: 0},
        {name: 'Actor B', initiative: 15, id: 1},
        {name: 'Actor d', initiative: 3, id: 2}
      ]
};

export default function basefunction(state = initialState, action) {
  switch (action.type) {
    /*case UPDATE_STATE:
      return {
        ...state, todoList: action.payload.todoList
      };*/
    default:
      return state;
  }
}