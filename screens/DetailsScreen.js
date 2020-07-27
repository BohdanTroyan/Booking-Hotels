import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, Button, Image, ScrollView } from 'react-native';
import { useIsFocused } from '@react-navigation/native'
import data from '../data/data.js'
import store from '../redux/store'


function DetailsScreen({ route, navigation, i }) {
  const isFocused = useIsFocused()
  useEffect(() => {
} , [isFocused])

    const {nameHotel} = route.params
    const {image} = route.params
    const {id} = route.params
    const {nameRooms} = route.params
    const {mainImage} = route.params

    const user = store.getState().userName  
    const money = store.getState().money 
    
    function checking(nameRooms){
      return nameRooms.check ? '' : nameRooms 
    }
    const NameRooms = data.Hotels[id-1].nameRooms.filter(checking).map(({nameRoom, image, price, check, number, id}, i) => 
  
    <View 
    key={i}
    style={{
      width: '95%',
      flex: 0,
      flexDirection: 'row', 
      borderColor: 'grey',
      borderWidth: 2,
      margin: 5,
      borderRadius: 30
    }}>
    <Image
        key={i}
        source={image}
        style={{
          width: 150,
          height: 150,
          borderRadius: 28
        }}
        />
        <View style={{flexDirection: 'column'}}>
        <Button 
        color='black'
        title={nameRoom}
        onPress={() => navigation.navigate('Номер', {
          number: number,
          nameRoom: nameRoom,
          price: price,
          check: check,
          image: image,
          id: id
        })} 
        />
        <Text style={{fontSize:20}}>{'Номер ' + number}</Text>
        <Text style={{fontSize:20}}>{'Цена ' + price}</Text>
        </View>
        </View>
        )
    return (
      <ScrollView>
        <View style={{flexDirection: 'row', width: '95%', borderWidth: 2, borderRadius: 30, margin: 5, justifyContent: 'space-between'}}>
      <Text style={{fontSize: 20,fontWeight: '300', marginLeft:10 }}>{user}</Text>
      <Text style={{fontSize: 20,fontWeight: '300', marginRight:10}}>{money}</Text>
          </View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text style={{ fontSize: 40, fontWeight: '200' }}>{nameHotel}</Text>
      <Image style={{
        height: 300,
        width:'95%',
        margin: 10,
        borderRadius: 30
      }}
      source={mainImage}
      />
      <Text style={{fontSize: 24, fontWeight: '300'}}>Доступные номера</Text>
      {NameRooms}  
    </View>
    </ScrollView>
    );
  }

  export default DetailsScreen