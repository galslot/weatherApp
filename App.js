import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Loading from './Loading';

export default function App() {
  return (

      <Loading />

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,  // Элементу нужно взять все доступное простанство
    //backgroundColor: '#0fff00',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#000000',
    fontSize: 24,
    width: '100%',
  },
  yellowView: {
    flex: 2,
    backgroundColor: 'yellow'
  },
  blueView: {
    flex: 3,
    backgroundColor: 'blue'
  }
});
