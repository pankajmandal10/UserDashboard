import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  Alert,
  Dimensions,
  StatusBar,
} from 'react-native';
import LanguagePicker from '../components/LanguagePicker';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import {loginUser} from '../reducers/authReducer';
import {PRIMARY_COLOR} from '../constents/Colors';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');

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
      language: language.name,
    };
    try {
      await dispatch(loginUser(credentials));
      Alert.alert('Alert', 'Login successful.');
      navigation.navigate('SetUpYourProfile');
      setEmail('');
      setPassword('');
      setLanguage('Hindi');
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
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.container}>
        <View style={styles.logoContainer}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>E-mail</Text>
          <View style={styles.boxContainer}>
            <Ionicons name="person-outline" size={20} color="black" />
            <TextInput
              style={styles.input}
              placeholder="Enter your e-mail"
              value={email}
              onChangeText={text => setEmail(text)}
            />
          </View>
        </View>
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Password</Text>
          <View style={styles.boxContainer}>
            <Ionicons name="lock-closed-outline" size={20} color="black" />
            <View style={styles.passwordInputContainer}>
              <TextInput
                style={styles.passwordInput}
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
        <View style={styles.inputContainer}>
          <Text style={styles.label}>Language</Text>
          <View style={styles.boxContainer}>
            <Fontisto name="world-o" size={20} color="black" />
            <LanguagePicker value={language} onChange={handleLanguageChange} />
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={() => handleLogin()}>
            <Text style={{...styles.buttonText, color: '#fff'}}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.createAccButton}
            onPress={() => navigation.navigate('NewAccount')}>
            <Text style={styles.buttonText}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  logoContainer: {
    marginTop: height * 0.1,
    marginBottom: height * 0.05,
    backgroundColor: PRIMARY_COLOR,
    padding: 20,
    borderRadius: 50,
  },
  logo: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  inputContainer: {
    width: '80%',
    marginBottom: height * 0.02,
  },
  label: {
    paddingBottom: 7,
    fontSize: 16,
    fontWeight: 'bold',
  },
  boxContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4EFF6',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    marginLeft: 10,
  },
  passwordInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
  },
  passwordInput: {
    flex: 1,
  },
  toggleButtonStyles: {
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonContainer: {
    width: '80%',
    paddingTop: '30%',
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
    borderRadius: 5,
    marginTop: height * 0.02,
  },
  createAccButton: {
    borderColor: PRIMARY_COLOR,
    borderWidth: 1,
    borderRadius: 5,
    marginTop: height * 0.02,
  },
  buttonText: {
    color: PRIMARY_COLOR,
    textAlign: 'center',
    padding: 12,
    fontSize: 16,
  },
});

export default LoginScreen;
