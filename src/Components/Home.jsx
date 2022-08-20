import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export const Home = ( ) => {
  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Home</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});
