import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Location from 'expo-location';
import { Alert, StyleSheet, Text, View } from 'react-native';

import Loading from './Loading';

export default class App extends React.Component {

  // Состояние - мы находимся в загрузке ГЕО позиции, или мы уже загрузились.
  state = {
    isLoading: true
  }

  // Асинхроная функция
  // React должен подождать выполнение функции getCurrentPositionAsync()
  getLocation = async () => {

    try {
      //throw Error();

      // пытаемься получить разрешение на доступ к ГЕО позиции.
      const response = await Location.requestForegroundPermissionsAsync();
      console.log(response);

      // пытаемься получить ГЕО позицию
      //const location = await Location.getCurrentPositionAsync();
      //console.log(location);
      // распоковка Обьекта
      //const {coords} = await Location.getCurrentPositionAsync();
      //console.log(coords.latitude, coords.longitude);
      const {coords: {latitude, longitude}} = await Location.getCurrentPositionAsync();
      console.log(latitude, longitude);
      this.setState({isLoading: false});
      // TODO [Запрос с API надо]


    }catch (error){
      Alert.alert('Не могу определить местоположение', "Очень грустно :(");
    }

  }

  // componentDidMount - вызывается сразу после монтирования. Метод подходит для настройки подписок.
  componentDidMount() {
    this.getLocation();
  }

  render() {

    const isLoading = this.state.isLoading;

    return (
        isLoading ? <Loading /> : null
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
