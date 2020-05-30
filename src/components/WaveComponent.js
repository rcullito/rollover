import * as React from 'react';
import { TouchableHighlight, Dimensions } from 'react-native';
import WaveSource from './WaveSource.js';
import styles from './styles.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as motionActions from '../actions/motionActions';

const windowWidth = Dimensions.get('window').width;

class RobWave extends React.Component {

    // get a ref here and then use this.props

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        console.log(this.props);


        // TODO make this a JS case statement
        if (this.props.motion.type == 'START_MOTION') {
            this.myRef.current.robStart();
        }
        // causing an effect but something is off, overall good job :)
        if (this.props.motion.type == 'START_VIBRATION') {
            this.myRef.current.robMultiple();
        }

        if (this.props.motion.type == 'STOP_VIBRATION') {
            this.myRef.current.robBackToOne();
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
            rob={this.props.motion}
            animated={false}
                />
        )
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
)(RobWave);
