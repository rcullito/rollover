import * as React from 'react';
import { TouchableHighlight, Dimensions } from 'react-native';
import ForkedWave from './ForkedWave.js';
import styles from './styles.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as motionActions from './src/actions/motionActions';

const windowWidth = Dimensions.get('window').width;

class RobWave extends React.Component {

    // get a ref here and then use this.props

    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    componentDidUpdate(prevProps) {
        console.log(this.props);

        if (this.props.motion.motion == 'started') {
            this.myRef.current.robStart();
        }
        
    }
    
    render () {
        return (
                <ForkedWave
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
