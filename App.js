import React from 'react';
import { View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home';

export default function App() {

  return (
    <View>
      <Home />
      <StatusBar />
    </View>
  );
}
