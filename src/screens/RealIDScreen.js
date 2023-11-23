import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PRIMARY_COLOR} from '../constents/Colors';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getUserProfiles} from '../reducers/authReducer';

const RealIDScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const user = useSelector(state => state.auth.user);
  const userId = useSelector(state => state.auth.userId);
  const token = useSelector(state => state.auth.userId);

  const userProfile = useSelector(state => state.auth.userProfile);

  console.warn('userdata', user);
  console.warn('userProfile', userProfile);

  return (
    <View style={styles.container}>
      <Text
        style={{
          fontSize: 24,
          fontWeight: '600',
          color: '#2C3135',
          textAlign: 'center',
          paddingBottom: 60,
        }}>
        Real ID
      </Text>

      <View style={{width: '80%'}}>
        <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
          E-mail
        </Text>
        <View style={styles.boxContainer}>
          <Ionicons name="person-outline" size={20} color="black" />
          <TextInput
            placeholder="Enter your e-mail"
            value={user.primary_email}
            onChangeText={text => setEmail(text)}
          />
        </View>
      </View>
      <View style={{width: '80%', marginVertical: 12}}>
        <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
          Username*
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
          First Name*
        </Text>
        <View style={styles.boxContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <TextInput
            placeholder="First Name"
            secureTextEntry
            value={firstName}
            onChangeText={text => setFirstName(text)}
          />
        </View>
      </View>

      <View style={{width: '80%', marginVertical: 12}}>
        <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
          Last Name*
        </Text>
        <View style={styles.boxContainer}>
          <Ionicons name="lock-closed-outline" size={20} color="black" />
          <TextInput
            placeholder="First Name"
            secureTextEntry
            value={lastName}
            onChangeText={text => setLastName(text)}
          />
        </View>
      </View>

      <View
        style={{
          width: '85%',
          flex: 1,
          justifyContent: 'flex-end',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>
            Save and Continue{'   '}
            <Image source={require('../assets/suffix-icon.png')} />
          </Text>
        </TouchableOpacity>
        <View
          style={{
            backgroundColor: PRIMARY_COLOR,
            alignItems: 'center',
            justifyContent: 'center',
            alignSelf: 'center',
            margin: 10,
            borderRadius: 50,
            width: 60,
            height: 60,
          }}>
          <Image source={require('../assets/Logo.png')} style={styles.logo} />
        </View>
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
    paddingVertical: 25,
  },
  idTitle: {
    fontSize: 20,
    fontWeight: '600',
    color: '#222',
    padding: 7,
  },
  content: {
    width: '80%',
    padding: 10,
    color: '#000000',
    fontSize: 15,
  },
  idHeder: {
    backgroundColor: '#D6DFDF',
    width: '85%',
    marginTop: 20,
    borderRadius: 20,
  },
  button: {
    backgroundColor: PRIMARY_COLOR,
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
    width: 30,
    height: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  boxContainer: {
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4EFF6',
    paddingHorizontal: 10,
  },
});
export default RealIDScreen;
