import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import data from '../data/data.js'
import store from '../redux/store'

function RoomInfo({ route }){
    const {number} = route.params
    const {image} = route.params
    const {nameRoom} = route.params
    const {price} = route.params
    const {id} = route.params

    const user = store.getState().userName  
    const money = store.getState().money 
    const password = store.getState().passWord
  
    const [colorBooking, setBooking] = useState(data.Hotels[id-1].nameRooms[number-1].check);
    const onPress = () => setBooking( 

      price <= money ?
     (data.Hotels[id-1].nameRooms[number-1].check 
      ? true
      : data.Hotels[id-1].nameRooms[number-1].check = true && 
      store.dispatch({ type: 'BOOKING', money: money, price: price} 
      )):
      alert('Недостаточно средств')
      
  
      );
  
    return(
      <ScrollView>
      <View>
        <View style={{flexDirection: 'row', width: '95%', borderWidth: 2, borderRadius: 30, margin: 5, justifyContent: 'space-between'}}>
      <Text style={{fontSize: 20,fontWeight: '300', marginLeft:10 }}>{user}</Text>
      <Text style={{fontSize: 20,fontWeight: '300', marginRight:10}}>{money}</Text>
          </View>
        <Text style={{textAlign: 'center', fontSize: 40, fontWeight: '200'}}>{nameRoom}</Text>
        <Image 
        style={{
          height: 300,
          width:'95%',
          margin: 10,
          borderRadius:30
        }}
        source={image}
        />
        <View style={{margin: 20}}>
        <Text style={{fontSize: 30}}>{'Номер комнаты ' + number}</Text>
        <Text style={{fontSize: 30}}>{'Цена ' + price}</Text>
        <TouchableOpacity
        style={{borderWidth:2, alignItems: 'center', backgroundColor: colorBooking?'#c40000':'#00c403', borderRadius: 30}}
        onPress={onPress}
        >
          <Text style={{fontSize:30, color: 'white'}}>Забронировать</Text>
        </TouchableOpacity>
        </View>
      </View>
      </ScrollView>
    )
  }

  

  export default RoomInfo