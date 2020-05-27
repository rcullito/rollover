import * as React from 'react';
import { TouchableHighlight, Dimensions } from 'react-native';
import ForkedWave from './ForkedWave.js';
import styles from './styles.js';


const windowWidth = Dimensions.get('window').width;
console.log(windowWidth);

class RobWave extends React.Component {

  constructor(props) {
    super(props);
    this.myRef = React.createRef();
  }

    resetAnimation() {
        this.myRef && this.myRef.stopAnim();
  }
    
    render () {
        return (

            <TouchableHighlight onPress={this.resetAnimation}>
                <ForkedWave
            ref={this.myRef}
            style={styles.wave}
            H={15}
            waveParams={[
                {A: 10, T: windowWidth, stroke: '#8a2be2', fill: 'none'},
            ]}
            animated={true}
                />
                    </TouchableHighlight>

        )
    }
}

export default RobWave;



