import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Location from 'expo-location';
import { StyleSheet, Text, View } from 'react-native';

import Loading from './Loading';

export default class App extends React.Component {

  // Асинхроная функция
  // React должен подождать выполнение функции getCurrentPositionAsync()
  getLocation = async () => {

    const location = await Location.getCurrentPositionAsync();
    console.log(location);
  }

  // componentDidMount - вызывается сразу после монтирования. Метод подходит для настройки подписок.
  componentDidMount() {
    this.getLocation();
  }

  render() {
    return (

        <Loading />

    );
  }
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
