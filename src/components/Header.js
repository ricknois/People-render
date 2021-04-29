import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Header = (props) => {
  return (
    <View style={style.container}>
      <Text style={style.title}>{ props.title }</Text>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    marginTop: 25,
    backgroundColor: '#71e3dd',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 40,
    color: '#fff',
  }
});

export default Header
