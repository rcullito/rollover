import * as React from 'react';
import { Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import startDeviceMotion from "./logic";

const intro = 'Rollover: an app designed to help make you more aware of your movements during sleep';

console.log("bleh");

class MotionButton extends React.Component {
  constructor(props) {
      super(props);
      this.updateInmotion = this.updateInmotion.bind(this);
    this.state = {
      inmotion: "bob",
    };
  }
    
    updateInmotion = () => {
        console.log("something is happening");
    this.setState({
      inmotion: "mary"
    });
  }


  render() {
      return (
              <TouchableOpacity onPress={this.updateInmotion}
      style={{ backgroundColor: 'blue' }}>
              <Text style={{ fontSize: 20, color: '#fff' }}>
              {this.state.inmotion}
          </Text>
          </TouchableOpacity> 
      );
  }
}

export default function App() {

  return (
    <View style={styles.container}>
          <Text style={styles.instructions}>{intro}</Text>
          <MotionButton></MotionButton>
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
