import 'react-native-gesture-handler';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';
import data from '../data/data.js'

function AddUser({navigation}) {

    const [userName, setUserName] = useState('')
    const [passWord, setPassWord] = useState('')
    const [money, setMoney] = useState(0)
  
    function addUserData({userName, passWord, money}) {
      if(userName && passWord && money !== null){
      let user = {
        userName: userName,
        passWord: passWord,
        money: money
      }
      data.Users.push(user)
      navigation.navigate('Авторизация')
    }}
  
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
        style={{height: 40, width: 200, borderColor: 'red', borderWidth: 2, fontSize: 20, margin: 10}}
        />
        <TextInput
        placeholder='Password'
        secureTextEntry
        value={passWord}
        onChangeText={setPassWord}
        style={{height: 40, width: 200, borderColor: 'red', borderWidth: 2, fontSize: 20}}
        />
        <TextInput
        placeholder='deposit'
        value={`${money}`}
        onChangeText={setMoney}
        style={{height: 40, width: 200, borderColor: 'red', borderWidth: 2, fontSize: 20, margin: 10}}
        />
      <TouchableOpacity
      onPress={() => addUserData({userName, passWord, money})}
      >
        <Text style={{fontSize: 30}}>Регистрация</Text>
      </TouchableOpacity>
      </View>
    )
    
  }

  export default AddUser