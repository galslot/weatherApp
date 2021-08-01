import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function Loading() {
    return (
        <View style={styles.container}>

            <Text style={styles.text}>Получение Погоды ...</Text>
        </View>
    );
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent:"flex-end", //контейнер в самом низу
        paddingHorizontal: 30,     // Отступы по горизонтали
        paddingVertical: 100,      // Отступы по вертикали
        backgroundColor: "#FDF6AA",
    },
    text: {
        color: "#2c2c2c",
        fontSize: 20
    }

});