import initialState from './initialState';
import {START_MOTION, STOP_MOTION} from '../actions/actionTypes';

export default function motion(state = initialState.motion, action) {
  let newState;
  switch (action.type) {
    case START_MOTION:
      console.log('START_MOTION Action')
      return action;
    case STOP_MOTION:
      newState = action.stuff;
      console.log('STOP_MOTION Action')
      return newState;
    default:
      return state;
  }
}
