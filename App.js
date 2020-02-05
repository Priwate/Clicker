import React from 'react';
import GameNavigator from './navigator/Navigator';
import { useScreens, enableScreens  } from 'react-native-screens';

useScreens();
enableScreens();

export default function App() {

  return (
    <GameNavigator />
  );
}

