import 'react-native-gesture-handler';
import React, { useEffect } from 'react';
import { View, Text, Button, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useIsFocused } from '@react-navigation/native'
import store from '../redux/store'


function HomeScreen({ navigation, data }) {

  const isFocused = useIsFocused()
  useEffect(() => {
} , [isFocused])

  const user = store.getState().userName  
  const money = store.getState().money  
  const password = store.getState().passWord

  function signOut() {
    return( navigation.navigate('Авторизация'),
    data.Users.filter(function(e) {
      return e.userName === user && e.passWord === password ? e.money = money : navigation.navigate('Авторизация')
    })
    )
  }

    const list = data.Hotels.map(({ nameHotel, mainImage, id, image, nameRooms, discribe }) =>
   
  <View 
  key={nameHotel}
  style={{
    flex:0,
    flexDirection: 'row', 
    borderColor: 'grey',
    borderWidth: 2,
    margin:5,
    borderRadius: 30
  }}>
    <Image 
    source={mainImage}
    style={{
      width: 150,
      height: 150,
      borderRadius: 28
    }}
    />
    <View style={{flex: 1}}>
  <Button 
        color='black'
        title={nameHotel}
        onPress={() => navigation.navigate('Отель', {
          nameHotel: nameHotel,
          image: image,
          id: id,
          nameRooms: nameRooms,
          mainImage: mainImage
        })} 
        />
        <Text style={{marginLeft:5, fontSize: 14, }}>{discribe}</Text>
        </View>
        </View>
    )
    return (
      <ScrollView>
      <View style={{ 
        margin: 10,
        borderRadius: 30
        }}>
          <View style={{flexDirection: 'row', width: '95%', borderWidth: 2, borderRadius: 30, margin: 5, justifyContent: 'space-between', borderColor:'grey'}}>
      <Text style={{fontSize: 20,fontWeight: '300', marginLeft:10 }}>{user}</Text>
      <Text style={{fontSize: 20,fontWeight: '300', marginRight:10}}>{money}</Text>
          </View>
        {list}
        <TouchableOpacity
        onPress={signOut}
        style={{alignItems:'center'}}>
        <Text style={{fontSize: 26, fontWeight: '200'}}>Выход</Text>
        </TouchableOpacity>
      </View>
      </ScrollView>
    );
  }

  export default HomeScreen