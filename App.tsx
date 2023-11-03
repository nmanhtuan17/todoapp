/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text
} from 'react-native';

import { Provider } from 'react-redux';
import { store, persistor } from './store';
import ListTodos from './src/ListTodos';
import { PersistGate} from "redux-persist/integration/react";
function App(): JSX.Element {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>

        <ListTodos/>
      </PersistGate>
     </Provider>
  );
}

const styles = StyleSheet.create({
  todoTitle: {
    fontSize: 30,
    margin: 20,
    textAlign: 'center',
    fontWeight: '700',
    color: '#000'
  }
});

export default App;
