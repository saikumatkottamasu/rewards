/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import Home from './src/screens/home';
import {RewardProvider} from './src/context/homeContext';

const App = () => {
  return (
    <RewardProvider>
      <Home />
    </RewardProvider>
  );
};

export default App;
