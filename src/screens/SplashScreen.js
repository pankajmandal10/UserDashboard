// SplashScreen.js
import React, {useEffect} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {PRIMARY_COLOR} from '../constents/Colors';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    // Simulate an asynchronous task (e.g., checking for authentication)
    const fakeAsyncTask = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000)); // Simulating 2 seconds delay
      // Navigate to the Login screen
      navigation.replace('Login');
    };

    fakeAsyncTask();
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: PRIMARY_COLOR,
  },
  logo: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
});

export default SplashScreen;
