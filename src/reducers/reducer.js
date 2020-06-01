import initialState from './initialState';
import {START_MOTION, STOP_MOTION, START_VIBRATION, STOP_VIBRATION} from '../actions/actionTypes';

export default function motion(state = initialState, action) {

  switch (action.type) {
  case START_MOTION:
      return Object.assign({}, state, {hasBeenStarted: true}, action);
    default:
      return Object.assign({}, state, action);
  }

}
