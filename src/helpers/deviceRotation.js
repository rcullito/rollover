import { Vibration } from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import store from '../store/configureStore';
import * as motionActions from '../actions/motionActions';

DeviceMotion.setUpdateInterval(2200);

const vibrationDuration = 4000;

let oldRotations = [0,0,0];
let okToStartVibrationMethods = true;

const startVibrationMethods = () => {
    store.dispatch(motionActions.startVibration());
    Vibration.vibrate(vibrationDuration);
    okToStartVibrationMethods = false;
}

const stopVibrationMethods = () => {
    store.dispatch(motionActions.stopVibration());
    okToStartVibrationMethods = true;
}

const maybeRespondToMovement = (difference, oldRotationValue) => {
    if (Math.abs(difference) > 0.5 && oldRotationValue !== 0 && okToStartVibrationMethods) {
        startVibrationMethods();
        setTimeout(stopVibrationMethods, vibrationDuration);
    }
}

const evaluateDifference = (newValues) => {
    let index = 0;
    while (index < newValues.length) { 
        let difference = newValues[index] - oldRotations[index];

        maybeRespondToMovement(difference, oldRotations[index]);

        index++; 
    }

    oldRotations = newValues;
}

const startDeviceMotion = () => {

    DeviceMotion.addListener(motionData => {

        let rotation = motionData['rotation'];
        if (rotation) {
            let newRotations = [rotation['alpha'], rotation['beta'], rotation['gamma']];
            evaluateDifference(newRotations);
        }
        
    });

}

const stopDeviceMotion = () => {
    // TODO work with the subscription from the individual
    // listener rather than having to remove all listeners
    DeviceMotion.removeAllListeners()

}


export { startDeviceMotion, stopDeviceMotion };
