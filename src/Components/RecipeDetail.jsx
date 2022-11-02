import { StyleSheet, Text, View, Image, Button } from 'react-native'
import React from 'react'

const RecipeDetail = ({ route, navigation }) => {
  const {item :{title, image}} = route.params
  //console.log(item)
  return (
    <View style={{alignItems:'center'}}>
      <Text style={{fontSize:32, fontWeight:'bold'}}>{title}</Text>
      <Image source={{uri:image}}
        style={{width:200, height:250, borderRadius:8, marginBottom:5}}
      />
      <Button
      title='Back'
      onPress={() => navigation.goBack()}
      />
    </View>
  )
}

export default RecipeDetail

const styles = StyleSheet.create({})
