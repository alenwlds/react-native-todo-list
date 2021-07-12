import React, { Component, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Header from './components/Header';
import ListItem from './components/ListItem';
import Form from './components/Form';

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    {text: 'Тест1', key: '1'},
    {text: 'Тест2', key: '2'},
    {text: 'Тест3', key: '3'},
    {text: 'Тест3', key: '4'}
  ])

  const addHandler = (text) => {
    setListOfItems((list) => {
      return [
        { text : text, key: Math.random().toString(36).substring(7) },
        ...list
      ]
    });
  }

  const deleteHandler = (key) => {
    setListOfItems((list) => {
      return list.filter(listOfItems => listOfItems.key != key)
    });
  }

  return (
    <LinearGradient 
      colors={['#000000', '#360a0a']}
      style = { styles.container }>
        <View>
          <Header />
          <Form addHandler = { addHandler }/>
          <View>
            <FlatList data = {listOfItems} renderItem = {({ item }) => (
              // <Text>{ item.text }</Text>
              <ListItem el = { item } deleteHandler = { deleteHandler } />
            )}/>
          </View>
        </View>
      </LinearGradient>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
}
});