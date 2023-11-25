import {
  Text,
  View,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {PRIMARY_COLOR} from '../constents/Colors';
import {useDispatch, useSelector} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';

const AliasScreen = ({navigation}) => {
  const dispatch = useDispatch();

  const [alias, setAlias] = useState('ironaman');
  const [displayName, setDisplayName] = useState('iron man');

  return (
    <>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
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
            Alias
          </Text>
          <View style={styles.boxContainer}>
            <Ionicons name="at-outline" size={20} color="#2C3135" />
            <TextInput
              placeholder="alias"
              value={alias}
              onChangeText={text => setAlias(text)}
            />
          </View>
        </View>
        <View style={{width: '80%', marginVertical: 12}}>
          <Text style={{paddingBottom: 7, fontSize: 16, fontWeight: 'bold'}}>
            Display Name
          </Text>
          <View style={styles.boxContainer}>
            <Ionicons name="person-outline" size={20} color="#2C3135" />
            <TextInput
              placeholder="Display Name"
              value={displayName}
              onChangeText={text => setDisplayName(text)}
            />
          </View>
        </View>

        <View
          style={{
            width: '85%',
            flex: 1,
            justifyContent: 'flex-end',
          }}>
          <TouchableOpacity style={styles.button} onPress={{}}>
            <Text style={styles.buttonText}>
              Save and Continue{'   '}
              <Image source={require('../assets/suffix-icon.png')} />
            </Text>
          </TouchableOpacity>
          <Text
            style={{
              fontSize: 16,
              color: '#E7651C',
              textAlign: 'center',
              marginVertical: 10,
            }}>
            Skip Alias creation for now
          </Text>
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
    width: 40,
    height: 40,
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
export default AliasScreen;
