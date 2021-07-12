import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, Button } from 'react-native';

export default function Form({ addHandler }) {
    const [text, setValue] = useState('');

    const onChange = (text) => {
        setValue(text);
    };

    return (
        <View >
            <TextInput  placeholderTextColor = '#fff' style = {styles.input} onChangeText = {onChange} placeholder = 'Введите вашу задачу...' />
            <Button color = '#b31e4b' onPress = {() => addHandler(text)} title = 'Добавить задачу' />
        </View>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1,
        borderColor: 'white',
        padding: 10,
        color: '#fff',
        marginVertical: 30,
        marginHorizontal: '20%',
        width: '60%',
        fontFamily: 'Cochin'
    }
});