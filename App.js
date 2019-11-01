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