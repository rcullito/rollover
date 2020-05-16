import * as React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { startDeviceMotion, stopDeviceMotion } from "./logic";

const intro = 'Rollover: an app designed to help make you more aware of your movements during sleep';


class MotionButton extends React.Component {
  constructor(props) {
      super(props);
      this.updateInmotion = this.updateInmotion.bind(this);
    this.state = {
      inmotion: false,
    };
  }


    // TODO work with the subscription from the individual
    // listener rather than having to remove all listeners
    updateInmotion = () => {

        if (this.state.inmotion) {
            stopDeviceMotion();
        } else {
            startDeviceMotion();
        }
        
        this.setState({
            inmotion: !this.state.inmotion
        });
  }


  render() {
      return (
              <TouchableOpacity onPress={this.updateInmotion}
          // TODO get these styles to the bottom, and then ultimately split them out into their own file
      style={styles.motionButton}>
              <Text style={styles.motionButtonText}>
              {this.state.inmotion ? 'Stop motion sensor' : 'Start motion sensor'}
          </Text>
          </TouchableOpacity> 
      );
  }
}

export default function App() {

  return (
          <ImageBackground source={require('./starry-sky-night-mountians-5k.jpg')} style={styles.container}>
          <View style={styles.container}>
          <Text style={styles.instructions}>{intro}</Text>
          <MotionButton></MotionButton>
          </View>
          </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      width: null,
      height: null,
  },
  instructions: {
    textAlign: 'center',
      color: '#fff',
      marginBottom: 15
  },
    motionButton: {
        backgroundColor: 'blue'
        
    },
    motionButtonText: {
        fontSize: 20,
        color: '#fff'
    }
});
