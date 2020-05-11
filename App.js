import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { DeviceMotion } from 'expo-sensors';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const intro = 'Welcome to Rollover friend of Rob. look at the destructuring';

DeviceMotion.setUpdateInterval(1000);

let oldRotations = [0,0,0];

// rotations are used externally
// values are used internally

const evaluateDifference = (newValues) => {

    let index = 0;
    while (index < newValues.length) { 
        let compareValue = oldRotations[index];
        let difference = newValues[index] - compareValue;
        if ( difference > 0.5) {
            console.log("ok we are on the move");
        }
        index++; 
    }

    oldRotations = newValues;
}

DeviceMotion.addListener(motionData => {

    let rotation = motionData['rotation'];
    if (rotation) {
        let newRotations = [rotation['alpha'], rotation['beta'], rotation['gamma']];
        console.log(newRotations);
        evaluateDifference(newRotations);
    }
 
});

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.welcome}>Welcome to React Native!</Text>
      <Text style={styles.instructions}>To get started, edit App.js</Text>
      <Text style={styles.instructions}>{instructions}</Text>
      <Text style={styles.instructions}>{intro}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
