import React from 'react';
import {Provider} from 'react-redux';
import store from '../redux/store';
import AddTodo from './AddTodo';
import ListTodo from './ListTodo';
import {StyleSheet, View} from 'react-native';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddTodo />
        <ListTodo />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20
  },
});

export default App;
