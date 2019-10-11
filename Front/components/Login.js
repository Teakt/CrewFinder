import React from 'react'
import Search from './components/Search'

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



const { width: WIDTH } = Dimensions.get('window')

export default class Login extends React.Component {
  render() {
    return (
  

      
      
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo}/>
              <Text style={styles.logoText}>CREW FINDER</Text>
            </View>


           
            
      </ImageBackground>
      
    )
  }
}


const styles = StyleSheet.create({
    backgroundContainer: {
      flex : 1 ,
      justifyContent: 'center',
      alignItems: 'center',

    },

    logoText:{
      color : 'white' ,
      fontSize : 20, 
      fontWeight : '500',
      marginTop : 10 ,
      opacity : 0.5
    },

    logoContainer:{
      alignItems: 'center',
      
      
    },

    logo:{
      width: 120,
      height:120,
      
    },

    input:{
      width : WIDTH - 55 ,
      height : 45,
      borderRadius : 25,
      fontSize : 16,
      paddingLeft : 45 ,
      backgroundColor : 'rgba(0,0,0,0.35)',
      color : 'rgba(255,255,255,0.7)',
      marginHorizontal : 25,
    },

    inputIcon:{
      position : 'absolute',
      top : 8,
      left : 37,
      
    },

});