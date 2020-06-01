import initialState from './initialState';
import {START_MOTION} from '../actions/actionTypes';

export default function motion(state = initialState, action) {

  switch (action.type) {
  case START_MOTION:
      return Object.assign({}, state, {hasBeenStarted: true}, action);
    default:
      return Object.assign({}, state, action);
  }

}
