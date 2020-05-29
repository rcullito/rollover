import * as React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import styles from './styles.js';
import * as motionActions from './src/actions/motionActions';
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
             this.props.motionActions.startMotion();
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
)(MotionBUtton);
