//import { UPDATE_STATE } from '../actions';

const initialState =  {
  todoList: [1, 2, 4, 5]
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