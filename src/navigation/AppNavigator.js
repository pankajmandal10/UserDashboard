import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import SplashScreen from '../screens/SplashScreen';
import LoginScreen from '../screens/LoginScreen';
import CreateAccountScreen from '../screens/CreateAccountScreen';
import SetUpYourProfile from '../screens/SetUpYourProfile';
import RealIDScreen from '../screens/RealIDScreen';
import AliasScreen from '../screens/AliasIDScreen';

const Stack = createStackNavigator();

const AppNavigator = () => (
  <NavigationContainer>
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="Splash">
      <Stack.Screen name="Splash" component={SplashScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="NewAccount" component={CreateAccountScreen} />
      <Stack.Screen name="SetUpYourProfile" component={SetUpYourProfile} />
      <Stack.Screen name="RealIDScreen" component={RealIDScreen} />
      <Stack.Screen name="AliasScreen" component={AliasScreen} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default AppNavigator;
