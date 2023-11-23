// index.js
import React from 'react';
import {Provider} from 'react-redux';
import {StatusBar} from 'react-native';
import store from './src/store/store';
import AppNavigator from './src/navigation/AppNavigator';
import {PRIMARY_COLOR} from './src/constents/Colors';

const App = () => (
  <Provider store={store}>
    <StatusBar backgroundColor={PRIMARY_COLOR} barStyle="default" />
    <AppNavigator />
  </Provider>
);

export default App;
