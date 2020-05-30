import initialState from './initialState';
import {START_MOTION, STOP_MOTION, START_VIBRATION, STOP_VIBRATION} from '../actions/actionTypes';

export default function motion(state = initialState, action) {

  switch (action.type) {
    case START_MOTION:
      return action;
    case STOP_MOTION:
      return action;
    case START_VIBRATION:
      return action;
  case STOP_VIBRATION:
      return action;
    default:
      return state;
  }

}
