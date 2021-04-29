import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './src/components/Header';
import axios from 'axios';

export default function App() {
  const [names, setNames] = useState([]);

  const fetchNames = () => {
     axios
     .get('https://randomuser.me/api/?nat=br&results=5')
     .then(response => {
       const { results } = response.data;
       setNames(results)
     })
  };
  
  useEffect(() => {
    fetchNames();
  }, [])

  

  return (
    <View style={style.app}>
      <Header title='Pessoas' />
      <StatusBar style="auto" />
      {names.map((name, index) => <Text key={index}>{ name.name.first }</Text>)}
    </View>
  );
}

const style = StyleSheet.create({
  app: {
    backgroundColor: 'white',
  }
});