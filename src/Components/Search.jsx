import * as React from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/dist/Ionicons';

export const Search = () =>  {
  return (
    <SafeAreaView style={styles.container} >
      <View style={styles.inputContainer} >
        <Icon name="search-circle" size={24} color="gray" /> 
        <TextInput placeholderTextColor={'white'} placeholder="Search" style={styles.textInput} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 70,
    // flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: '#fb923c',
    borderRadius: 6,
  },
  textInput: {
    paddingLeft: 10,
    flex: 1,
    height: 50,
  },
});
