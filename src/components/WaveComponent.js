import * as React from 'react';
import { TouchableHighlight, Dimensions } from 'react-native';
import WaveSource from './WaveSource.js';
import styles from './styles.js';
import {connect} from 'react-redux';
import { startDeviceMotion, stopDeviceMotion } from "../helpers/deviceRotation.js";
const windowWidth = Dimensions.get('window').width;

class RobWave extends React.Component {

    // get a ref here and then use this.props

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidUpdate(prevProps) {

        switch (this.props.motionType) {
          case 'START_MOTION':
              this.myRef.current.robStart();
              setTimeout(function(){ startDeviceMotion(); }, 5000);
            break;
        case 'STOP_MOTION':
            console.log('here we are in the updated subscription');
            console.log(this.myRef.current);
            // TODO compare this to the ref we get when we start
//              this.myRef.current.robStop();
//              stopDeviceMotion();
              break;
          case 'START_VIBRATION':
              this.myRef.current.robMultiple();
              break;
          case 'STOP_VIBRATION':
              this.myRef.current.robBackToOne();
              break;
        }
    }
    
    render () {
        return (
                <WaveSource
            ref={this.myRef}
            style={styles.wave}
            H={15}
            waveParams={[
                {A: 10, T: windowWidth, stroke: '#8a2be2', fill: 'none'},
            ]}
            animated={false}
                />
        )
    }
}

function mapStateToProps(state) {
  return {
    motionType: state.type
  };
}

export default connect(
  mapStateToProps,
)(RobWave);
