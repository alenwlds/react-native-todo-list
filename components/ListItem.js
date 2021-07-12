import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

export default function ListItem({ el, deleteHandler }) {
    return (
        <TouchableOpacity onPress = { () => deleteHandler(el.key) }>
            <Text style = { styles.text }> { el.text } </Text>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
   text: {
       textAlign: 'center',
       borderRadius: 5,
       backgroundColor: '#2b2b2b',
       borderWidth: 1,
       marginTop: 20,
       fontFamily: 'Cochin',
       width: '60%',
       color: '#fff',
       padding: 20,
       marginLeft: '20%'
   }
});