import React from 'react';
import { ImageBackground, Text,Image, View, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const data = [
  {
    id: 1,
    name: 'Shapes',
    image: '',
    route: 'DragAndDrop'
  },
  {
    id: 2,
    name: 'Shapes',
    image: '',
    route: 'Game'
  },
  {
    id: 3,
    name: 'Shapes',
    image: '',
    route: 'DragAndDrop'
  },
  {
    id: 4,
    name: 'Shapes',
    image: '',
    route: 'DragAndDrop'
  },
  {
    id: 5,
    name: 'Shapes',
    image: '',
    route: 'DragAndDrop'
  },
  {
    id: 6,
    name: 'Shapes',
    image: '',
    route: 'DragAndDrop'
  },
  {
    id: 7,
    name: 'Shapes',
    image: '',
    route: 'DragAndDrop'
  },
  {
    id: 8,
    name: 'Shapes',
    image: '',
    route: 'DragAndDrop'
  },
  {
    id: 9,
    name: 'Shapes',
    image: '',
    route: 'DragAndDrop'
  },
  {
    id: 10,
    name: 'Shapes',
    image: '',
    route: 'DragAndDrop'
  },
]

const GamesScreen = ({ navigation }) => {
  return (
    <ImageBackground 
      source={require('../../assets/games_background.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.gamesContainer}
          scrollEnabled={false}
          data={data}
          numColumns={5}
          columnWrapperStyle={{
            justifyContent: "space-between",
            margin: 25
          }}
          renderItem={({item}) => 
            <View>
              <TouchableOpacity onPress={() => navigation.navigate(item.route)}>
                <Image source={require('../../assets/game_tile.png')} style={styles.profilePic}></Image>
              </TouchableOpacity>
            </View>
          }
          keyExtractor={item => item.id}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  gamesContainer: {
    width: 900,
    height: '100%',
    padding: 50,
  },
  backgroundImage: {
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
  },
});

export default GamesScreen;