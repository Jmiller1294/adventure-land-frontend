import React, { useContext, useEffect, useState } from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';


const HomeScreen = ({ navigation }) => {
  const newSound = new Audio.Sound();
  const [sound, setSound] = useState(newSound);
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    if(!finished) {
      loadAudio();
    
      const interval = setInterval(() => {
        sound.replayAsync();
      }, 33000);

      return () => clearInterval(interval);
    }
  }, [finished, sound]);

loadAudio = async () => {
  try{ 
    await sound.loadAsync(
      require('../../assets/start_screen_music.mp3')
    );
    playAudio();
  }
  catch(err){
    console.error(err)
  }
}

playAudio = async () => {
  try {
    await sound.playAsync();
  }
  catch(err) {
    console.error(err);
  }
}

stopAudio = async () => {
  try {
    await sound.unloadAsync();
    setFinished(true);
  }
  catch(err) {
    console.error(err);
  }
}

  return (
    <View style={styles.background}>
      <Image
        source={require('../../assets/home_background.png')}
        style={styles.backgroundImage}
      />
      <Text style={styles.headerText}>Toddler Games</Text>
      <TouchableOpacity onPress={() => 
        {navigation.navigate('Games'); stopAudio()}
      }>
        <Image
          source={require('../../assets/play_button.png')}
          style={styles.button}
        />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerText: {
    fontSize: 70,
    fontWeight: 'bold',
    marginTop: 60,
    color: '#FFFFFF',
  },
  background: {
    flexDirection: 'column',
    alignItems: 'center',
    height: '100%',
    width: '100%',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // You can adjust resizeMode based on your needs
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  buttonText: {
    height: 20,
    fontSize: 20,
    fontWeight: 'bold'
  },
  button: {
    height: 98,
    width: 195,
    marginTop: 70
  },
  
});

export default HomeScreen;