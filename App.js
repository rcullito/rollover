import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const intro = 'Welcome to Rollover friend of Rob. look at the destructuring';

Gyroscope.setUpdateInterval(1000);


// ok TODO, beyond turning a certain number of radians
// in just ONE direction, vibrate phone
Gyroscope.addListener(gyroScopeData => {
    let { x, y, z } = gyroScopeData;
    // only log if any of the values are over a certain threshold
    // get a feel for how chatty this is
    if (x >= 1 || y >=1 || z >= 1) {
        console.log("x is: ", x);
        console.log("y is: ", y);
        console.log ("z is: ", z)
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
