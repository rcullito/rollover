import * as React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles.js';
import MotionButton from './MotionButton.js';
import './waves.js'

const intro = 'Rollover: an app designed to help make you more aware of your movements during sleep';

export default function App() {

  return (
          <ImageBackground source={require('./starry-sky.jpg')} style={styles.container}>
          <View style={styles.container}>
          <Text style={styles.instructions}>{intro}</Text>
          <MotionButton></MotionButton>
          <canvas id="waves" width="200" height="100"></canvas>
          </View>
          </ImageBackground>
  );
}

