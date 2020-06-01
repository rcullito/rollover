import initialState from './initialState';
import {START_MOTION, STOP_MOTION, START_VIBRATION, STOP_VIBRATION} from '../actions/actionTypes';

export default function motion(state = initialState, action) {

  switch (action.type) {
  case START_MOTION:
      return Object.assign({hasBeenStarted: true, motion: action.motion}, state);
    default:
      return Object.assign(action, state);
  }

}
