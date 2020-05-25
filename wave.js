import * as React from 'react';
import Wave from 'react-native-waveview';
import styles from './styles.js';


class RobWave extends React.Component {
    render () {
        return (
                <Wave
            ref={ref=>this._waveRect = ref}
            style={styles.wave}
            H={15}
            waveParams={[
                {A: 10, T: 300, fill: '#62c2ff'},
            ]}
            animated={true}
                />

        )
    }
}

export default RobWave;



