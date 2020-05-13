import { Vibration } from 'react-native';
import { DeviceMotion } from 'expo-sensors';

const INITIALPAUSE = 50;
const PAUSE = 3000;
const PATTERN = [INITIALPAUSE, 1000, PAUSE, 3000, PAUSE, 5000];

DeviceMotion.setUpdateInterval(1000);

let oldRotations = [0,0,0];

const evaluateDifference = (newValues) => {

    let index = 0;
    while (index < newValues.length) { 
        let oldRotationValue = oldRotations[index];
        let newRotationValue = newValues[index];
        let difference = newRotationValue - oldRotationValue;
        if ( Math.abs(difference) > 0.5) {
            console.log("ok we are on the move");
            console.log(oldRotationValue);
            console.log(newRotationValue);
            // default to 400ms
            Vibration.vibrate(PATTERN);
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


export default startDeviceMotion;
