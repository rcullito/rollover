import * as React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import startDeviceMotion from "./logic";

const intro = 'Rollover: an app designed to help make you more aware of your movements during sleep';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.instructions}>{intro}</Text>

       <TouchableOpacity
      onPress={() => startDeviceMotion()}
        style={{ backgroundColor: 'blue' }}>
        <Text style={{ fontSize: 20, color: '#fff' }}>Start Motion Sensor</Text>
          </TouchableOpacity>
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
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
