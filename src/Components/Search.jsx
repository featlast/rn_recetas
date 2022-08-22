import * as React from 'react';
import { Text, SafeAreaView, View, TextInput, StyleSheet } from 'react-native';
//import { Ionicons } from '@expo/vector-icons';

export const Search = () =>  {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer} >
        {/* <Ionicons name="search" size={24} color="gray" /> */}
        <TextInput placeholderTextColor={'white'} placeholder="Search" style={styles.textInput} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 6,
  },
  textInput: {
    paddingLeft: 10,
    flex: 1,
    height: 50,
  },
});
