import { StatusBar } from 'expo-status-bar';
import React from 'react';
import * as Location from 'expo-location';
import { Alert, StyleSheet, Text, View } from 'react-native';
import axios from 'axios';

import Loading from './Loading';

const API_KEY = '59ac9f398ff130acfb0efbb872dabe2b';

export default class App extends React.Component {

  // Состояние - мы находимся в загрузке ГЕО позиции, или мы уже загрузились.
  state = {
    isLoading: true
  }

  // запрос погоды
  getWeather = async (latitude, longitude) => {

    const {data} = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`);

    console.log(data);
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

      // TODO [Запрос с API надо]
      this.getWeather(latitude, longitude);

      this.setState({isLoading: false});

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
        isLoading ? <Loading /> : <View></View>
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
