import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const PeopleList = (props) => {
  const { name, picture, people } = props;
  const { title, first, last } = name;
  const { thumbnail } = picture;

  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={ () => {
      navigation.navigate('PeopleDetail', { name: name, people: people });
    } }>
      <View style={ styles.container }>
          <View style={ styles.line }>
            <Image style={ styles.avatar } source={{ uri: thumbnail, }} />
            <Text
              style={ styles.lineText }
            >
              {`${title} ${first} ${last}`}
            </Text>
          </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create ({
   container: {
     backgroundColor: '#e2f9ff',
   },
   line: {
    height: 60,
    borderBottomWidth: 1,
    borderBottomColor: '#bbb',
    alignItems: 'center',
    flexDirection: 'row',
   },
   lineText: {
    fontSize: 20,
    paddingLeft: 15,
    flex: 7,
   },
   avatar : {
    aspectRatio: 1,
    flex: 1,
    borderRadius: 50,
    marginLeft: 15,
   },
});

export default PeopleList
