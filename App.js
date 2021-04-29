import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import Home from './src/pages/Home';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={ HeaderOptions }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HeaderOptions = {
  title: 'People',
  headerStyle: {
    backgroundColor: '#6ca2f7',
    borderBottomWidth: 1,
    borderBottomColor: '#C5C5C5',
  },
  headerTitleStyle: {
    color: 'white',
    fontSize: 30,
    flexGrow: 1,
    textAlign: 'center',
  }
}