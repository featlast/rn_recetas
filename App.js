import React from 'react';
import {StatusBar} from 'react-native';
import MyStack from './src/Navigations/MyStack';

const App = () => {
  return (
    <>
      <MyStack />
      <StatusBar backgroundColor="#fb923c" barStyle={'dark-content'} />
    </>
  );
};

export default App;
