import React from 'react'

import { createStackNavigator} from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation'

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

import bgImage from '../images/background.png'
import logo from '../images/logo.png'
import App from '../App'



const { width: WIDTH } = Dimensions.get('window')

export default class Login extends React.Component {
  render() {


    var _this = this;





    return (
  

      
      

      
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.logoContainer}>
              <Image source={logo} style={styles.logo}/>
              <Text style={styles.logoText}>PAGE 1 </Text>
            </View>

           

            <View style={styles.button}>
            <Button
              title="MIAOU"
              onPress={() => this.props.navigation.navigate('Login')}
              />
            </View>
            
           

           
            
      </ImageBackground>
      
     
      
    )
  }
}




const styles = StyleSheet.create({
    backgroundContainer: {
      flex : 0 ,
      width : '100%' ,
      height : '100%' , 

    },

    logoText:{
      color : 'white' ,
      fontSize : 35, 
      fontWeight : '800',
      marginTop : 10 ,
      opacity : 1
    },


    facebook:{
      marginBottom : 30 ,
    },
    logoContainer:{
      flex : 1 ,
      alignItems: 'center',
      marginTop : 60 ,
      
      
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

    button:{
      flex : 1 ,
      width : '100%' ,
      height : '100%' , 
      alignItems : "center" ,
      
      
    
      
    },


    inputIcon:{
      position : 'absolute',
      top : 8,
      left : 37,
      
    },

});