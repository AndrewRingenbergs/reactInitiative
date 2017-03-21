export const ADD_ACTOR = 'ADD_ACTOR';
export const REMOVE_ACTOR = 'REMOVE_ACTOR';
export const UPDATE_NAME = 'UPDATE_NAME';
export const UPDATE_INITIATIVE = 'UPDATE_INITIATIVE';

export function addActor(target = null) {
  return {
    type: ADD_ACTOR,
    payload: target
  }
}

export function removeActor(target = null) {
  return {
    type: REMOVE_ACTOR,
    payload: target
  }
}

export function updateName(target = null, name) {
  return {
    type: UPDATE_NAME,
    payload: target,
    name
  }
}

export function updateInitiative(target = null, initiative) {
  return {
    type: UPDATE_INITIATIVE,
    payload: target,
    initiative
  }
}