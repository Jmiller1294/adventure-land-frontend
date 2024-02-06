import React, { useEffect } from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from './src/screens/HomeScreen';
import AccountScreen from './src/screens/AccountScreen';
import { Provider } from './src/context/AccountContext';
import CreateAccountScreen from './src/screens/CreateAccountScreen';
import GamesScreen from './src/screens/GamesScreen';
import GameScreen from './src/screens/GameScreen';
import DragAndDropShapeGame from './src/screens/games/DragAndDropShapeGame';

const naviagtor = createStackNavigator({
  Home: HomeScreen,
  Account: AccountScreen,
  CreateAccount: CreateAccountScreen,
  Games: GamesScreen,
  Game: GameScreen, 
  DragAndDrop: DragAndDropShapeGame
}, {
  headerMode: 'none',
  initialRouteName: 'Home'
});

const App =  createAppContainer(naviagtor);

export default () => {
  return (
    <Provider>
      <App />
    </Provider>
  )
};