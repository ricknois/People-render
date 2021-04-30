import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, ActivityIndicator, StyleSheet } from 'react-native'
import axios from 'axios';

import { StatusBar } from 'expo-status-bar';
import PeopleList from '../components/PeopleList';


const Home = ({ navigation }) => {
  const [peoples, setPeoples] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const fetchNames = () => {
    setLoading(true);
      axios
      .get('https://randomuser.me/api/?nat=us&results=20')
      .then(response => {
        const { results } = response.data;
        setPeoples(results);
        setLoading(false);
      }).catch(error => {
        setLoading(false);
        setError(true);
      });
  };

  useEffect(() => {
    fetchNames();
  }, [])

  return (
    <View style={styles.container}>
      { loading
        ? <ActivityIndicator size="large" color="#6ca2f7"/>
        : error
        ? <Text style={styles.error}>Oops ... Something went wrong :(</Text>
        : <FlatList
            data={ peoples }
            renderItem={({ item }) => (
              <PeopleList
                name={ item.name }
                picture={ item.picture }
                people={ item }
            />
            )}
          keyExtractor={ item => item.cell }/>
         }
        <StatusBar />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  error: {
    color: 'red',
    alignSelf: 'center',
  },
});

export default Home