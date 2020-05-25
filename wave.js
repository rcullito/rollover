import * as React from 'react';
import ForkedWave from './ForkedWave.js';
import styles from './styles.js';


class RobWave extends React.Component {
    render () {
        return (
                <ForkedWave
            ref={ref=>this._waveRect = ref}
            style={styles.wave}
            H={15}
            waveParams={[
                {A: 10, T: 300, stroke: '#62c2ff', fill: 'none'},
            ]}
            animated={true}
                />

        )
    }
}

export default RobWave;



