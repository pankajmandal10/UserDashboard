import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  FlatList,
  TextInput,
  StyleSheet,
} from 'react-native';
import {userApi} from '../services/api';

const CountryLanguagePicker = ({value, onChange}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchCountriesAndLanguages = async () => {
      try {
        const response = await userApi.getCountry();
        const countriesAndLanguages = response.data.info; // Adjust this based on the actual API response
        console.warn('lang data', countriesAndLanguages);
        setData(countriesAndLanguages);
      } catch (error) {
        console.error('Error fetching countries and languages:', error);
      }
    };
    fetchCountriesAndLanguages();
  }, []);

  const handleSelect = selectedValue => {
    setModalVisible(false);
    onChange(selectedValue);
  };

  const renderListItem = ({item}) => (
    <TouchableOpacity onPress={() => handleSelect(item)}>
      <Text style={styles.listItem}>{item.name}</Text>
    </TouchableOpacity>
  );

  const filterData = () => {
    return data.filter(item =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => setModalVisible(true)}>
        <Text style={styles.selectedItem}>
          {value.name ? value.name : 'Hindi'}
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} animationType="slide">
        <View style={styles.modalContainer}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search"
            value={searchTerm}
            onChangeText={text => setSearchTerm(text)}
          />

          <FlatList
            data={filterData()}
            keyExtractor={item => item.toString()}
            renderItem={renderListItem}
          />

          <TouchableOpacity onPress={() => setModalVisible(false)}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // marginBottom: 20,
  },
  selectedItem: {
    fontSize: 16,
    padding: 12,
    // borderColor: 'gray',
    // borderWidth: 1,
  },
  modalContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
  },
  listItem: {
    fontSize: 16,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray',
  },
  closeButton: {
    fontSize: 16,
    color: 'blue',
    textAlign: 'center',
    padding: 10,
  },
});

export default CountryLanguagePicker;
