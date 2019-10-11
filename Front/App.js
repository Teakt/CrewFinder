// App.js

import React from 'react'

import Login from './components/Login'

import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Dimensions

} from 'react-native'




import bgImage from './images/dark.jpg'
import logo from './images/logo.png'
import Icon from 'react-native-vector-icons/Ionicons'


const { width: WIDTH } = Dimensions.get('window')

export default class App extends React.Component {
  render() {
    return (
  

      <View>
        <Login/>
      </View>
      
      
      
      
    )
  }
}
