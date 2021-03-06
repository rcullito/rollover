import * as types from './actionTypes';


export function startMotion () {
    return {type: types.START_MOTION, motion: 'started'}
}

export function stopMotion () {
    return {type: types.STOP_MOTION, motion: 'stopped'}
}

export function startVibration () {
    return {type: types.START_VIBRATION}
}

export function stopVibration () {
    return {type: types.STOP_VIBRATION}
}
