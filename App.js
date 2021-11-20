/* BEM VINDO!! Esté é a Collab Food, um aplicativo para anúncios de alimentos seriam jogados no lixo, 
devidos pequenos defeitos,como deformação, ou tamanho irregular. Aqui o fornecedor pode anúncia-los para ONGs.

Integrantes: 
RM 85607 - Beatriz Kül Rezende 
RM 85473 - Danilo Maia Boccomino
RM 85542 - Giovanna Caroline Adorno
RM 85136 - Gustavo Henrique Garrido de Melo
RM 83448 - Gustavo Malvone
*/

import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator()


import Login from './src/components/screens/user/Login';
import RegisterUser from './src/components/screens/user/RegisterUser';
import Home from './src/components/screens/Home';
import ProfileUser from './src/components/screens/user/ProfileUser';
import EditUser from './src/components/screens/user/EditUser';
import RegisterAdvertising from './src/components/screens/advertising/RegisterAdvertising';
import ProfileAdvertising from './src/components/screens/advertising/ProfileAdvertising';
import AdvertisingUser from './src/components/screens/user/AdvertisingUser';
import EditAdvertising from './src/components/screens/advertising/EditAdvertising';


const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Group
         screenOptions={{ 
            headerShown: false
           }}>
          <Stack.Screen 
              name='login' 
              component={Login}/>

          <Stack.Screen 
              name='registerUser' 
              component={RegisterUser}/>
              
          <Stack.Screen 
              name='home' 
              component={Home}/>

          <Stack.Screen 
              name='profileUser' 
              component={ProfileUser}/>

          <Stack.Screen 
              name='editUser' 
              component={EditUser}/>
              
          <Stack.Screen 
              name='registerAdvertising' 
              component={RegisterAdvertising}/>
          <Stack.Screen 
              name='profileAdvertising' 
              component={ProfileAdvertising}/>

          <Stack.Screen 
              name='advertisingUser' 
              component={AdvertisingUser}/>

          <Stack.Screen 
              name='editAdvertising' 
              component={EditAdvertising}/>
              
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
export default App;