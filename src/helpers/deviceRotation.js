import { Vibration } from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import store from '../store/configureStore';
import * as motionActions from '../actions/motionActions';

DeviceMotion.setUpdateInterval(2200);

const vibrationDuration = 4000;

let oldRotations = [0,0,0];

const respondToMovement = () => {
    store.dispatch(motionActions.startVibration());
    setTimeout(function(){ store.dispatch(motionActions.stopVibration()); }, vibrationDuration);
    Vibration.vibrate(vibrationDuration);
}

const evaluateDifference = (newValues) => {
    let index = 0;
    while (index < newValues.length) { 
        let difference = newValues[index] - oldRotations[index];

        if ( Math.abs(difference) > 0.5 && oldRotationValue !== 0) {
            console.log(oldRotationValue);
            respondToMovement();
        }

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
    
    DeviceMotion.removeAllListeners()

}


export { startDeviceMotion, stopDeviceMotion };
