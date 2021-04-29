import React from 'react'
import { View, Text, StyleSheet, Image } from 'react-native'

const PeopleList = (props) => {
  const { name, picture } = props;
  const { title, first, last } = name;
  const { thumbnail } = picture;

  return (
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
