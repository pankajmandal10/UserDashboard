import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {PRIMARY_COLOR} from '../constents/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {loginUser, registerUser, resigterUser} from '../reducers/authReducer';

const CreateAccountScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleCreateAccount = async () => {
    // Validate the input fields
    if (!email || !password || !confirmPassword) {
      Alert.alert('Error', 'Please fill in all fields.');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('Error', 'Passwords do not match. Please try again.');
      return;
    }

    await dispatch(
      registerUser({
        primary_email: email,
        os_platform: 'ios',
        os_platform_version: '0.1.1',
        user_agent: 'user2',
        device_name: 'device2',
        type: 'desktop',
        password: password,
        device_id: '263',
        device_token: '678',
      }),
    );

    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          backgroundColor: PRIMARY_COLOR,
          width: 90,
          height: 90,
          justifyContent: 'center',
          borderRadius: 50,
          marginBottom: 60,
        }}>
        <Image source={require('../assets/Logo.png')} style={styles.logo} />
      </View>
      <View style={{width: '80%'}}>
        <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
          E-mail
        </Text>
        <View style={styles.boxContainer}>
          <Ionicons name="person-outline" size={20} color="black" />
          <TextInput
            placeholder="Enter your e-mail"
            value={email}
            onChangeText={text => setEmail(text)}
          />
        </View>
      </View>
      <View style={{width: '80%', marginVertical: 12}}>
        <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
          Password
        </Text>
        <View style={styles.boxContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <TextInput
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={text => setPassword(text)}
          />
        </View>
      </View>
      <View style={{width: '80%', marginVertical: 12}}>
        <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
          Confirm Password
        </Text>
        <View style={styles.boxContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <TextInput
            placeholder="Confirm Password"
            secureTextEntry
            value={confirmPassword}
            onChangeText={text => setConfirmPassword(text)}
          />
        </View>
      </View>
      <View style={{marginVertical: 90, width: '80%'}}>
        <TouchableOpacity style={styles.button} onPress={handleCreateAccount}>
          <Text style={styles.buttonText}>
            Next{'   '}
            <Image source={require('../assets/suffix-icon.png')} />
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccButton}
          onPress={() => {
            // handleCreateAccount;
          }}>
          <Text style={{...styles.buttonText, color: PRIMARY_COLOR}}>
            Cancel account creation
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    marginBottom: 20,
  },
  boxContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4EFF6',
    paddingHorizontal: 10,
  },
  input: {
    width: '80%',
    height: 40,
    // borderColor: 'gray',
    // borderWidth: 1,
    backgroundColor: 'gray',
    marginBottom: 10,
    padding: 10,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 5,
    marginTop: 20,
  },
  createAccButton: {
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 20,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    padding: 12,
    fontSize: 15,
  },

  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default CreateAccountScreen;
