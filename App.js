import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/pages/Home';
import PeopleDetail from './src/pages/PeopleDetail';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={ HeaderDefault }
      >
        <Stack.Screen
          name="Home"
          component={ Home }
          options={{ title: 'People' }}
        />
        <Stack.Screen
          name="PeopleDetail"
          component={ PeopleDetail }
          options={ (navigation) => PeopleDetailHeader(navigation) }
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HeaderDefault = {
  headerTintColor: 'white',
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

const PeopleDetailHeader = ({ route }) => {
  const { name } = route.params;
  
  return ({
    title: name.first,
    headerTitleStyle: {
      color: 'white',
      fontSize: 30,
  }
  });
};