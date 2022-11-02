import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import  { Home } from '../Screen/Home'
import RecipeDetail from '../Components/RecipeDetail'

const Stack = createNativeStackNavigator()

const MyStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerShown:false,
        gestureEnabled:true
      }}>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='RecipeDetail' component={RecipeDetail} />
      </Stack.Navigator>
    </NavigationContainer>
    )
}

export default MyStack
