import { Vibration } from 'react-native';
import { DeviceMotion } from 'expo-sensors';
import store from './src/store/configureStore';
import * as motionActions from './src/actions/motionActions';

DeviceMotion.setUpdateInterval(1000);

let oldRotations = [0,0,0];

const evaluateDifference = (newValues) => {

    let index = 0;
    while (index < newValues.length) { 
        let oldRotationValue = oldRotations[index];
        let newRotationValue = newValues[index];
        let difference = newRotationValue - oldRotationValue;
        if ( Math.abs(difference) > 0.5) {
            console.log("toast"); // https://www.youtube.com/watch?v=fq6R39wWXGM
//            console.log(oldRotationValue);
            //            console.log(newRotationValue);
            store.dispatch(motionActions.startVibration());
            Vibration.vibrate(3000);
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
