import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './styles.js';
import * as motionActions from '../actions/motionActions';
import {Text, TouchableOpacity } from 'react-native';

class MotionButton extends React.Component {

  render() {
      return (
              <TouchableOpacity onPress={() => {
                  if (this.props.motion.motion == 'stopped') {
                      this.props.motionActions.startMotion();                      
                  } else {
                      this.props.motionActions.stopMotion();                      
                  }
              }}
      style={styles.motionButton}>
              <Text style={styles.motionButtonText}>
              {this.props.motion.motion == 'stopped' ? 'Start motion sensor' : 'Stop motion sensor'}
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

function mapDispatchToProps(dispatch) {
  return {
    motionActions: bindActionCreators(motionActions, dispatch)
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MotionButton);
