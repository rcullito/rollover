import * as React from 'react';
import { ImageBackground, Text, View } from 'react-native';
import styles from './styles.js';
import MotionButton from './MotionButton.js';

const intro = 'Rollover: an app designed to help make you more aware of your movements during sleep';

export default function App() {

  return (
          <ImageBackground source={require('./starry-sky.jpg')} style={styles.container}>
          <View style={styles.container}>
          <Text style={styles.instructions}>{intro}</Text>
          <MotionButton></MotionButton>
          </View>
          </ImageBackground>
  );
}

