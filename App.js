// App.js

import React from 'react'

import Navigation from './navigation/Navigation'
import Login from './components/Login'
import Chat from './components/Chat'
import Finder from './components/Finder'

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
  Button
  

} from 'react-native'



import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


const { width: WIDTH } = Dimensions.get('window')

 class App extends React.Component {

  
  render() {

   
    return (
  

      <View>
        
      </View>
      
     
      
    )
  }
}



const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Page1: Finder,
    Page2: Chat,
    
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
