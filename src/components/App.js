import * as React from 'react';
import { ImageBackground, TouchableOpacity, TouchableHighlight, Text, View } from 'react-native';
import { Provider } from 'react-redux'
import store from '../store/configureStore';
import styles from './styles.js';
import MotionButton from './MotionButton.js';
import RobWave from './WaveComponent.js';

import * as TaskManager from 'expo-task-manager';
import * as Location from 'expo-location';
const LOCATION_TASK_NAME = 'background-location-task';


TaskManager.defineTask(LOCATION_TASK_NAME, ({ data, error }) => {
  if (error) {
    // Error occurred - check `error.message` for more details.
    return;
  }
  if (data) {
    const { locations } = data;
      // do something with the locations captured in the background
      console.log(locations);
  }
});


export default class Component extends React.Component {
  onPress = async () => {
    const { status } = await Location.requestPermissionsAsync();
    if (status === 'granted') {
        await Location.startLocationUpdatesAsync(LOCATION_TASK_NAME, {
            // there are some options that we can work with here
        accuracy: Location.Accuracy.Balanced,
      });
    }
  };

  render() {
    return (
            <TouchableOpacity style={{margin: 30}} onPress={this.onPress}>
        <Text>Enable background location</Text>
      </TouchableOpacity>
    );
  }
}



