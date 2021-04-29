import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native'
import axios from 'axios';

import Header from '../components/Header';
import PeopleList from '../components/PeopleList';


const Home = () => {
  const [peoples, setPeoples] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchNames = () => {
     axios
     .get('https://randomuser.me/api/?nat=br&results=5')
     .then(response => {
       const { results } = response.data;
       setPeoples(results);
       setLoading(false);
     })
  };

  useEffect(() => {
    fetchNames();
  }, [])

  return (
    <View>
      {/* <Header title='Pessoas' /> */}
      { !loading 
        ? peoples.map((item, index) => (
          <PeopleList key={ index } name={ item.name } picture={ item.picture }/>
        ))
        : <Text>Carregando...</Text>}
    </View>
  )
}

export default Home
