import * as React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';

const instructions = Platform.select({
  ios: `Press Cmd+R to reload,\nCmd+D or shake for dev menu`,
  android: `Double tap R on your keyboard to reload,\nShake or press menu button for dev menu`,
});

const intro = 'Welcome to Rollover friend of Rob. Caya von dios?';

let gyroAboard = Gyroscope.isAvailableAsync()
    .then( (val) => console.log("gyroscope available: ", val));

Gyroscope.setUpdateInterval(5000);

Gyroscope.addListener(gyroScopeData => {
    console.log(gyroScopeData);
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
