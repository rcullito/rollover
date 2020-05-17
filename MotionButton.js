import * as React from 'react';
import styles from './styles.js';
import {Text, TouchableOpacity } from 'react-native';
import { startDeviceMotion, stopDeviceMotion } from "./logic";

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
      style={styles.motionButton}>
              <Text style={styles.motionButtonText}>
              {this.state.inmotion ? 'Stop motion sensor' : 'Start motion sensor'}
          </Text>
          </TouchableOpacity> 
      );
  }
}

export default MotionButton;
