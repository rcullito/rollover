import * as React from 'react';
import { ImageBackground, TouchableHighlight, Text, View } from 'react-native';
import styles from './styles.js';
import MotionButton from './MotionButton.js';
import Wave from 'react-native-waveview';


const intro = 'Rollover: an app designed to help make you more aware of your movements during sleep';

export default function App() {

  return (
          <ImageBackground source={require('./starry-sky.jpg')} style={styles.container}>
          <View style={styles.container}>
          <Text style={styles.instructions}>{intro}</Text>
          <MotionButton></MotionButton>
          </View>
          <View style={styles.container} >
    <Wave
        ref={ref=>this._waveRect = ref}
        style={styles.wave}
        H={30}
        waveParams={[
            {A: 10, T: 180, fill: '#62c2ff'},
            {A: 15, T: 140, fill: '#0087dc'},
            {A: 20, T: 100, fill: '#1aa7ff'},
        ]}
        animated={true}
    />
</View>

          </ImageBackground>
  );
}

