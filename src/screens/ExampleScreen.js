// LIBRARIES
import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, TextInput} from 'react-native';
import {connect} from 'react-redux';
import {storeData, getData} from '../utils/asyncStore';

const ExampleScreen = ({dispatch, counter}) => {
  const [name, setName] = useState(null);
  const [updatedName, setUpdatedName] = useState(null);

  useEffect(() => {
    console.log(name, 'name');
  });

  return (
    <View style={styles.container}>
      <View style={styles.btnWrapper}>
        <View style={styles.headerText}>
          <Text>Redux Debbuging test</Text>
        </View>
        <TouchableOpacity onPress={() => dispatch({type: 'INCREMENT'})} style={styles.btn}>
          <Text style={styles.text}>Increment</Text>
        </TouchableOpacity>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={() => dispatch({type: 'DECREMENT'})} style={styles.btn}>
          <Text style={styles.text}>Decrement</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.btnWrapper}>
        <View style={styles.headerText}>
          <Text>AsyncStorage debugging test</Text>
        </View>
        <View style={{borderWidth: 1, borderColor: 'black'}}>
          <TextInput onChangeText={(text) => setName(text)} style={styles.textInput} value={name} />
        </View>
        <TouchableOpacity onPress={() => storeData('name', name)} style={styles.btn}>
          <Text style={styles.text}>SET</Text>
        </TouchableOpacity>
        <Text>{updatedName ? updatedName : null}</Text>
        <TouchableOpacity
          onPress={() => {
            getData('name').then((res) => {
              console.log(res, 'fetched name from async store');
              setUpdatedName(res);
            });
          }}
          style={styles.btn}>
          <Text style={styles.text}>GET</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ccc',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnWrapper: {
    marginVertical: 20,
    width: '80%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  btn: {
    backgroundColor: 'dodgerblue',
    padding: 10,
  },
  text: {
    color: '#fff',
  },
  headerText: {
    marginVertical: 10,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  textInput: {padding: 0, margin: 0, width: 200, color: 'black'},
});

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(ExampleScreen);
