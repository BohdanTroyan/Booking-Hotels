import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import data from '../data/data.js'
import store from '../redux/store'

function Auth({navigation}){
  
    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    
    
      function save({userName, passWord}){
       if(
        data.Users.map(name => name.userName === userName && name.passWord === passWord ? 
        store.dispatch({type:'LOGIN', userName: userName, passWord: passWord ,money: name.money}) &&
        navigation.navigate('Отели')
        : 
        '')
       ){
      }
      }
     
      return(
        <View style={{
          flex:1,
          alignItems: 'center',
          justifyContent: 'center'
        }}>
          <TextInput
          placeholder='Login'
          value={userName}
          onChangeText={setUserName}
          style={{height: 40, width: 200, borderColor: 'grey', borderWidth: 2, fontSize: 20, margin: 10, borderRadius: 8}}
          />
          <TextInput
          placeholder='Password'
          secureTextEntry
          value={passWord}
          onChangeText={setPassWord}
          style={{height: 40, width: 200, borderColor: 'grey', borderWidth: 2, fontSize: 20, borderRadius: 8}}
          />
        <TouchableOpacity
        onPress={() => save({userName, passWord})}>
          <Text style={{fontSize: 30}}>Вход</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={() => navigation.navigate('Регистрация')}>
          <Text style={{fontSize: 30}}>Регистрация</Text>
        </TouchableOpacity>
        </View>
      )
    }

    export default Auth