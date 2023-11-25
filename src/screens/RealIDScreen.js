import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {PRIMARY_COLOR} from '../constents/Colors';
import {useDispatch, useSelector} from 'react-redux';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Octicons from 'react-native-vector-icons/Octicons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {getUserProfiles, updateProfile} from '../reducers/authReducer';

const RealIDScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState('');
  const [userName, setUserName] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobileNo, setMobileNo] = useState(0);
  const [countryCode, setCountryCode] = useState('91');

  const user = useSelector(state => state.auth.user);
  const userId = useSelector(state => state.auth.userId);
  const token = useSelector(state => state.auth.token);

  const userProfile = useSelector(state => state.auth.userProfile.info);

  useEffect(() => {
    setEmail(userProfile.primary_email);
    setCountryCode(userProfile.mobile_country);
    setUserName(userProfile.username);
    setFirstName(userProfile.first_name);
    setLastName(userProfile.last_name);
    setMobileNo(userProfile.mobile);
    console.warn('userdata h', countryCode, userProfile.mobile_country);
    // console.warn('userProfile', userProfile);
    // console.warn('token g', token);
  }, []);

  const onUserUpdate = async () => {
    const profileData = {
      username: userName,
      first_name: firstName,
      last_name: lastName,
      mobile: mobileNo,
      email: email,
      mobile_country: 91,
    };
    try {
      await dispatch(updateProfile(token, profileData));
      navigation.navigate('Login');
    } catch (error) {
      console.warn(error);
    }
  };

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container}>
          <Text
            style={{
              fontSize: 24,
              fontWeight: '600',
              color: '#2C3135',
              textAlign: 'center',
              paddingBottom: '10%',
            }}>
            Real ID
          </Text>

          <View
            style={{
              backgroundColor: '#F4F4F4',
              alignItems: 'center',
              justifyContent: 'center',
              alignSelf: 'center',
              margin: 10,
              borderRadius: 50,
              width: 90,
              height: 90,
            }}>
            <Image
              source={require('../assets/user-circle.png')}
              style={styles.logo}
            />
          </View>

          <View style={{width: '80%'}}>
            <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
              E-mail
            </Text>
            <View style={{...styles.boxContainer, backgroundColor: '#999999'}}>
              <MaterialIcons name="mail-outline" size={24} color="black" />
              <TextInput
                placeholder="Enter your e-mail"
                value={email}
                style={{width: '100%'}}
                onChangeText={text => setEmail(text)}
              />
            </View>
          </View>
          <View style={{width: '80%', marginVertical: 12}}>
            <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
              Username*
            </Text>
            <View style={styles.boxContainer}>
              <Ionicons name="at-outline" size={20} color="black" />
              <TextInput
                placeholder="username"
                style={{width: '100%'}}
                value={userName}
                onChangeText={text => setUserName(text)}
              />
            </View>
          </View>
          <View style={{width: '80%', marginVertical: 12}}>
            <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
              First Name*
            </Text>
            <View style={styles.boxContainer}>
              <Ionicons name="person-outline" size={20} color="black" />
              <TextInput
                placeholder="First Name"
                style={{width: '100%'}}
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
              <Ionicons name="person-outline" size={20} color="black" />
              <TextInput
                placeholder="Last Name"
                style={{width: '100%'}}
                value={lastName}
                onChangeText={text => setLastName(text)}
              />
            </View>
          </View>

          <View
            style={{
              width: '80%',
              marginVertical: 12,
              flexDirection: 'row',
            }}>
            <View>
              <Text
                style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
                Country
              </Text>
              <View style={styles.boxContainer}>
                <Fontisto name="world-o" size={18} color="#2C3135" />
                <TextInput
                  placeholder="-##"
                  keyboardType="name-phone-pad"
                  value={countryCode.toString()}
                  onChangeText={text => setCountryCode(text)}
                />
              </View>
            </View>
            <View style={{paddingLeft: 20, width: '66%'}}>
              <Text
                style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
                Mobile
              </Text>
              <View style={styles.boxContainer}>
                <Octicons name="device-mobile" size={18} color="#2C3135" />
                <TextInput
                  placeholder="xxx - xx xx xxx"
                  style={{width: '100%'}}
                  keyboardType="name-phone-pad"
                  value={mobileNo}
                  onChangeText={text => setMobileNo(text)}
                />
              </View>
            </View>
          </View>
          <View
            style={{
              width: '85%',
              flex: 1,
              justifyContent: 'flex-end',
              // marginTop: '20%',
            }}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => onUserUpdate()}>
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
              <Image
                source={require('../assets/Logo.png')}
                style={styles.logo}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </>
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
