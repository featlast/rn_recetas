import { StyleSheet, SafeAreaView, StatusBar } from 'react-native'
import React from 'react'

import ListData from '../Components/ListData'

export const Home = ( ) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListData/>
      <StatusBar
        animated={true}
        backgroundColor="#282828"/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:'#282828'
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color:'white'
  },
});
