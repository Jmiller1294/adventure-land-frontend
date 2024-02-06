import React, { useRef } from 'react';
import { View, Text } from 'react-native';
import { GameEngine } from 'react-native-game-engine';
import Matter from 'matter-js';
import GameButton from './GameButton';

const Game = () => {
  const engine = useRef(null);

  const handleButtonClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  const entities = {
    physics: { engine: Matter.Engine.create() }, // Create the Matter.js physics engine
    button: {
      body: Matter.Bodies.rectangle(100, 100, 100, 50, { isStatic: true }),
      renderer: <GameButton onPress={handleButtonClick} title="Click Me" />,
    },
  };

  const physics = (entities, { time }) => {
    Matter.Engine.update(entities.physics.engine, time.delta);
    return entities;
  };

  return (
    <GameEngine
      ref={engine}
      systems={[physics]}
      entities={entities}
    >
    </GameEngine>
  );
};

export default Game;
