// LIBRARIES
import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {connect} from 'react-redux';

const ExampleScreen = ({dispatch, counter}) => {
  return (
    <View style={styles.container}>
      <View style={styles.btnWrapper}>
        <TouchableOpacity onPress={() => dispatch({type: 'INCREMENT'})} style={styles.btn}>
          <Text style={styles.text}>Increment</Text>
        </TouchableOpacity>
        <Text>{counter}</Text>
        <TouchableOpacity onPress={() => dispatch({type: 'DECREMENT'})} style={styles.btn}>
          <Text style={styles.text}>Decrement</Text>
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
    height: '15%',
    width: '60%',
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
});

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

export default connect(mapStateToProps)(ExampleScreen);
