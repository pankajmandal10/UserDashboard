import {
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect} from 'react';
import {PRIMARY_COLOR} from '../constents/Colors';
import {useDispatch, useSelector} from 'react-redux';
import {getUserProfiles} from '../reducers/authReducer';
import {ScrollView} from 'react-native-gesture-handler';

const {width, height} = Dimensions.get('window');
const SetUpYourProfile = ({navigation}) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.auth.user);
  const userId = useSelector(state => state.auth.userId);
  const token = useSelector(state => state.auth.token);
  useEffect(() => {
    if (userId) {
      dispatch(getUserProfiles(token, userId));
    }
  }, [dispatch, token, userId]);

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: '600',
            color: '#2C3135',
            textAlign: 'center',
            paddingVertical: height * 0.08,
          }}>
          Set Up Your Profiles
        </Text>

        <Text
          style={{
            fontSize: 15,
            fontWeight: '400',
            color: '#222',
            textAlign: 'left',
            width: '90%',
            marginTop: height * 0.01,
          }}>
          A Rukkor account is associated with two profiles, one which we call
          Real ID and one which is your Alias. You choose in which settings you
          wish to expose your true identity and in which you wish to use an
          alias.
        </Text>

        <View style={styles.idHeder}>
          <TouchableOpacity
            onPress={() => navigation.navigate('RealIDScreen')}
            style={{flexDirection: 'row', padding: 20}}>
            <View style={{justifyContent: 'space-between'}}>
              <Text style={styles.idTitle}>Real ID</Text>
              <Image source={require('../assets/Frame.png')} />
            </View>
            <Text style={styles.content}>
              With Real ID you can disclose your personal details like name,
              phone number, birthday, e-mail and more. Use your Real ID when
              interacting with trusted family, friends and colleagues.
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.idHeder}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AliasScreen')}
            style={{flexDirection: 'row', padding: 20}}>
            <View style={{justifyContent: 'space-between'}}>
              <Text style={styles.idTitle}>Alias ID</Text>
              <Image source={require('../assets/Frame.png')} />
            </View>
            <Text style={styles.content}>
              Using your Alias you can choose an additional @alias with which
              you can join Spaces and interact with other users in communities
              where you’re not comfortable sharing your personal details.
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: '85%',
            justifyContent: 'flex-end',
            marginTop: '20%',
          }}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>
              Next{'   '}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    // marginVertical: height * 0.03,
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
});
export default SetUpYourProfile;
