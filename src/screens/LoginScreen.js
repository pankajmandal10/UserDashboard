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
import LanguagePicker from '../components/LanguagePicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {PRIMARY_COLOR} from '../constents/Colors';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {loginUser} from '../reducers/authReducer';

const LoginScreen = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [language, setLanguage] = useState('Hindi');
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);
  const error = useSelector(state => state.auth.error);

  const handleLogin = async () => {
    const credentials = {
      primary_email: email,
      os_platform: 'ios',
      os_platform_version: '0.1.2',
      user_agent: 'user_agent223',
      device_name: 'device_name22',
      type: 'desktop',
      password: password,
      device_id: '123',
      language: 'Hindi',
    };
    try {
      await dispatch(loginUser(credentials));
      Alert.alert('Alert', 'Login successful.');
      navigation.navigate('SetUpYourProfile');
      setEmail('');
      setEmail('');
    } catch (error) {
      console.error('Login error', error);
      // Show an alert for a failed login attempt
      Alert.alert(
        'Login Failed',
        'Invalid email or password. Please try again.',
      );
    }
  };

  const handleLanguageChange = selectedLanguage => {
    console.warn('on select', selectedLanguage);
    setLanguage(selectedLanguage);
  };
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
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
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '90%',
            }}>
            <TextInput
              placeholder="Password"
              secureTextEntry={!showPassword}
              value={password}
              onChangeText={text => setPassword(text)}
            />
            <TouchableOpacity
              onPress={togglePasswordVisibility}
              style={styles.toggleButtonStyles}>
              <Icon
                name={showPassword ? 'eye' : 'eye-slash'}
                size={20}
                color="gray"
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={{width: '80%', marginVertical: 12}}>
        <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
          Language
        </Text>
        <View style={styles.boxContainer}>
          <Fontisto name="world-o" size={20} color="black" />
          <LanguagePicker value={language} onChange={handleLanguageChange} />
        </View>
      </View>
      <View style={{marginVertical: 90, width: '80%'}}>
        <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.createAccButton}
          onPress={() => navigation.navigate('NewAccount')}>
          <Text style={{...styles.buttonText, color: PRIMARY_COLOR}}>
            Create New Account
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
  toggleButtonStyles: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 35,
    height: 35,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
});

export default LoginScreen;
