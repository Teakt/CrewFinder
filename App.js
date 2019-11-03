// App.js

import React from 'react'

import Navigation from './navigation/Navigation'
import Login from './components/Login'
import Chat from './components/Chat'

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
  

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
        <Button
          title="Go to Details"
          onPress={() => this.props.navigation.navigate('Login')}
        />
      </View>
      
     
      
    )
  }
}



const AppNavigator = createStackNavigator(
  {
    Login: Login,
    Page1: Chat,
    
  },
  {
    initialRouteName: 'Login',
  }
);

export default createAppContainer(AppNavigator);
