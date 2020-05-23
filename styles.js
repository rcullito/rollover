import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
      width: null,
      height: null,
  },
  instructions: {
    textAlign: 'center',
      color: '#fff',
      marginBottom: 15
  },
    motionButton: {
        backgroundColor: '#8a2be2',
        padding: 12,
        borderRadius: 13
        
    },
    motionButtonText: {
        fontSize: 20,
        color: '#fff'
    },
    wave: {
        width: '100%',
        aspectRatio: 1,
        overflow: 'hidden'
    }
});

export default styles;
