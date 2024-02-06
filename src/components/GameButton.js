import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';

const GameButton = ({ onPress, title, size, body, color }) => {
  const width = size[0];
  const height = size[1];
  const x = body.position.x - width / 2;
  const y = body.position.y - height / 2;

  const styles = StyleSheet.create({
    button: {
      position: 'absolute',
      top: y,
      left: x,
      width: width,
      height: height,
      backgroundColor: 'red'
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
      textAlign: 'center',
    },
  });

  return (
    <View style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </View>
  );


  
};



export default GameButton;