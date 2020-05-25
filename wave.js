import * as React from 'react';
import { Dimensions } from 'react-native';
import ForkedWave from './ForkedWave.js';
import styles from './styles.js';


const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);

class RobWave extends React.Component {
    render () {
        return (
                <ForkedWave
            ref={ref=>this._waveRect = ref}
            style={styles.wave}
            H={15}
            waveParams={[
                {A: 10, T: windowWidth, stroke: '#62c2ff', fill: 'none'},
            ]}
            animated={true}
                />

        )
    }
}

export default RobWave;



