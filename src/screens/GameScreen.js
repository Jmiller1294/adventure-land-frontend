import React, { useRef, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';
import GameButton from '../components/GameButton';

const GameScreen = () => {
  let engine = useRef(null);
  
  useEffect(() => {
    entities = setupWorld();
  }, []);

  let setupWorld = () => {
    //sets up matter physics engine
    let engine = Matter.Engine.create({ enableSleeping: false});
    
    //set up world
    let world = engine.world;

    //world entities
    let square = Matter.Bodies.rectangle(100, 100, 100, 100);

    //add objects to world
    Matter.World.add(world, [square]);

    return {
      physics: { engine: engine, world: world },
      square: { 
        body: square, 
        size: [350, 350], 
        color: 'red',
        renderer: <GameButton title="Click Me" />
      }
    }
  }
  
  let entities = {
    physics: { engine: Matter.Engine.create({ enableSleeping: false}), world: engine.world }, // Create the Matter.js physics engine
    square: {
      body: Matter.Bodies.rectangle(200, 100),
      size: [150, 150],
      renderer: <GameButton title="Click Me" />,
    },
  };

  return(
    <View styles={styles.container}>
      <GameEngine
        ref={(ref) => { engine = ref }}
        styles={styles.gameContainer}
        entities={entities}
      />
    </View>
  )
};

const styles = StyleSheet.create({});

export default GameScreen;