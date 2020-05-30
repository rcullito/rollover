import * as React from 'react';
import {connect} from 'react-redux';
import styles from './styles.js';
import {startMotion, stopMotion} from '../actions/motionActions';
import {Text, TouchableOpacity } from 'react-native';

class MotionButton extends React.Component {

    render() {

        let motion = this.props.motion;
        
      return (
              <TouchableOpacity onPress={() => {
                  if (motion == 'stopped') {
                      this.props.dispatch(startMotion());
                  } else {
                      this.props.dispatch(stopMotion());
                  }
              }}
      style={styles.motionButton}>
              <Text style={styles.motionButtonText}>
              {motion == 'stopped' ? 'Start motion sensor' : 'Stop motion sensor'}
          </Text>
          </TouchableOpacity> 
      );
  }
}

function mapStateToProps(state) {
  return {
    motion: state.motion
  };
}

export default connect(
  mapStateToProps,
)(MotionButton);
