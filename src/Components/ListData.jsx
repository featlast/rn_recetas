import React from 'react'
import { Text, FlatList,Image, View, TouchableOpacity } from 'react-native'
import { data } from '../Data/data'
import { Search } from '../Components/Search'

const ListData = () => {
  

  const renderItem = ({item}) => {
    // const treding = data.filter(listdata => listdata.category === 'Trending')
    /**Pendiente refactorizar estas 2 vistas */
    return (
      <View>
        {data.filter(listdata => listdata.category === 'Treding')
        ?
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
        :
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
        }
      {/* <TouchableOpacity
      onPress={() => console.log(item.id)}
      >
    <Image
        style={{ width: 160, height: 200, margin: 3, borderRadius: 3 }}
        source={{ uri: item.image }} />
        <View style={{alignItems:'center'}}>
        <Text style={{color:'white', fontWeight:'bold' }}>{item.title}</Text>
        </View>
        </TouchableOpacity> */}
    </View>
    
    ) 
  }

  return (
    <>
    <Search/>
    
    <View>
      <Text style={{color:'#fb923c', fontWeight:'bold', fontSize: 35}}>Treding</Text>
    <FlatList
    data={data}
    horizontal
    keyExtractor={ (item) => item.id }
    renderItem = {renderItem}
  />
  </View>
  </>
  )
}

export default ListData
