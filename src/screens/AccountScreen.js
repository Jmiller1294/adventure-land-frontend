import React, { useReducer, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity, Image, ImageBackground } from 'react-native';
import { Context } from '../context/AccountContext';
import { Grid } from 'matter-js';


const AccountScreen = ({ navigation }) => {
  const { state, addAccount } = useContext(Context);
  return (
  <View style={styles.container}>
    <ImageBackground source={require('../../assets/player_select.png')} style={styles.imageContainer}>
      <View style={styles.test2}>
        <FlatList 
          contentContainerStyle={styles.profilesContainer}
          horizontal={true}
          scrollEnabled={false}
          data={state}
          renderItem={({item}) => 
            <View>
              <TouchableOpacity onPress={() => navigation.navigate('Games')}>
                <Image source={require('../../assets/character4.png')} style={styles.profilePic}></Image>
              </TouchableOpacity>
              <Text style={styles.profileText}>{item.name}</Text>
            </View>
          }
          keyExtractor={item => item.name}
        />
      </View>
      <TouchableOpacity style={styles.test} onPress={() => navigation.navigate('CreateAccount')}>
          <Image source={require('../../assets/add_button.png')} style={styles.addProfilePic}></Image>
      </TouchableOpacity>
    </ImageBackground>
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  imageContainer: {
    height: 400,
    width: 800,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  profilesContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    width: 'auto'
  },
  test: {
    height: 200,
    width: 200,
    minWidth: 100,
    justifyContent: 'center',
    marginBottom: 20
  },
  test2: {
    height: 200,
    minWidth: 100,
    width: 'auto',
  },
  addProfilePic: {
    alignSelf: 'center'
  },
  profileText: {
    alignSelf: 'center'
  }
});

export default AccountScreen;