import { Vibration } from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import store from './src/store/configureStore';
import * as motionActions from './src/actions/motionActions';

DeviceMotion.setUpdateInterval(3000);

const vibrationDuration = 4000;

let oldRotations = [0,0,0];

const evaluateDifference = (newValues) => {

    let index = 0;
    while (index < newValues.length) { 
        let oldRotationValue = oldRotations[index];
        let newRotationValue = newValues[index];
        let difference = newRotationValue - oldRotationValue;

        // TODO we may also need to throttle. fun!

        // we want a tangible difference, and starting value will be 0 so dont record deviation from that
        // as that is essentially just "turning on" the event listener
        if ( Math.abs(difference) > 0.5 && oldRotationValue !== 0) {
            console.log("toast"); // https://www.youtube.com/watch?v=fq6R39wWXGM
            console.log(oldRotationValue);
            store.dispatch(motionActions.startVibration());
            Vibration.vibrate(vibrationDuration);
            setTimeout(function(){ store.dispatch(motionActions.stopVibration()); }, vibrationDuration);
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
