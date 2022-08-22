import React from 'react'
import { Text, FlatList,Image, View, TouchableOpacity } from 'react-native'
import { data } from '../Data/data'
import { Search } from '../Components/Search'

const ListData = () => {
  return (
    <>
    <Search/>
    
    <View>
      <Text style={{color:'#732247', fontWeight:'bold', fontSize: 35}}>Treding</Text>
    <FlatList
    data={data}
    horizontal
    keyExtractor={ (item) => item.id }
    renderItem = { ({item}) =>
    <View>
      <TouchableOpacity
      onPress={() => console.log(item.id)}
      >
    <Image
        style={{ width: 160, height: 200, margin: 3, borderRadius: 3 }}
        source={{ uri: item.image }} />
        <View style={{alignItems:'center'}}>
        <Text style={{color:'white', fontWeight:'bold' }}>{item.title}</Text>
        </View>
        </TouchableOpacity>
    </View>
    
    }
  />
  </View>
  </>
  )
}

export default ListData
