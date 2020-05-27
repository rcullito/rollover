import * as React from 'react';
import { TouchableHighlight, Dimensions } from 'react-native';
import ForkedWave from './ForkedWave.js';
import styles from './styles.js';


const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);

class RobWave extends React.Component {

    render () {
        return (
                <ForkedWave
            ref={this.myRef}
            style={styles.wave}
            H={15}
            waveParams={[
                {A: 10, T: windowWidth, stroke: '#8a2be2', fill: 'none'},
            ]}
            animated={true}
                />
        )
    }
}

export default RobWave;



