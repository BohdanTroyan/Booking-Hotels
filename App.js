import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import data from './data/data.js'
import HomeScreen from './screens/HomeScreen'
import DetailsScreen from './screens/DetailsScreen'
import RoomInfo from './screens/RoomInfo'
import store from './redux/store'
import Auth from './screens/Auth'
import AddUser from './screens/AddUser'

const Stack = createStackNavigator();
function App() {


  return (
    <NavigationContainer value={store}>
      <Stack.Navigator initialRouteName="Авторизация">
       <Stack.Screen name="Отели" options={{headerLeft: null}}>
  {props => <HomeScreen {...props} data={data} />}
</Stack.Screen>
        <Stack.Screen name="Отель">
  {props => <DetailsScreen {...props} data={data} />}
</Stack.Screen>  
        <Stack.Screen name="Номер">
  {props => <RoomInfo {...props} data={data} />}
</Stack.Screen>
<Stack.Screen name="Авторизация">
    {props => <Auth {...props} data={data} />}
    </Stack.Screen>
<Stack.Screen name="Регистрация">
    {props => <AddUser {...props} data={data} />}
    </Stack.Screen> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App
