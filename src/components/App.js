import * as React from 'react';
import { ImageBackground, TouchableHighlight, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from '../store/configureStore';
import styles from './styles.js';
import MotionButton from './MotionButton.js';
import RobWave from './WaveComponent.js';

const intro = 'Rollover: an app designed to help make you more aware of your movements during sleep';

export default function App() {

    return (
        
            <ImageBackground source={require('../assets/images/starry-sky.jpg')} style={styles.container}>
            <Provider store={store}>
          <View style={styles.container}>
          <Text style={styles.instructions}>{intro}</Text>
          <MotionButton></MotionButton>
          <RobWave></RobWave>
            </View>
            </Provider>
          </ImageBackground>
  );
}

