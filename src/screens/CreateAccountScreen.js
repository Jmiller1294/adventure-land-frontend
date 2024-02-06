import React, { useContext } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Context } from '../context/AccountContext';

const CreateAccountScreen = ({ navigation }) => {
  const { state, addAccount } = useContext(Context);
  return (
    <View>
      <Text>Create Account Screen</Text>
      <TouchableOpacity 
        style={styles.button} 
        onPress={() => { 
          addAccount(); 
          navigation.navigate('Account')
        }}>
        <Text>Click Me</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'red',
    alignSelf: 'center',
    height: 50,
    width: 200,
    alignItems: 'center',
    justifyContent: 'center'
  }
});

export default CreateAccountScreen;