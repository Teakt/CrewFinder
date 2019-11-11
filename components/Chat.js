import React from 'react'

import { createStackNavigator} from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation'

import { GiftedChat } from 'react-native-gifted-chat'

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

export default class Chat extends React.Component {

  
  state = {
    messages: [],
    titleText: "MESSAGES:",
  }

  UNSAFE_componentWillMount() {
    this.setState({
      messages: [
        {
          _id: 1,
          text: 'Hello there, General Kenobi !',
          createdAt: new Date(),
          user: {
            _id: 2,
            name: 'Santa Claus',
            avatar: 'https://placeimg.com/140/140/any',
          },
        },
      ],
    })
  }

  onSend(messages = []) {
    this.setState(previousState => ({
      messages: GiftedChat.append(previousState.messages, messages),
    }))
  }


  render() {


   




    return (
  

      
      

      
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={styles.messagesTitle}> 
                    

            
                      <Text style={styles.titleText} onPress={this.onPressTitle}>
                          {this.state.titleText}
                      </Text>
                    
            </View>

            <View style={styles.logoContainer}>
                    <GiftedChat
                messages={this.state.messages}
                onSend={messages => this.onSend(messages)}
                user={{
                  _id: 1,
                }}
              />
            </View>

           

            
            
           

           
            
      </ImageBackground>
      
     
      
    )
  }
}




const styles = StyleSheet.create({
    backgroundContainer: {
      flex : 1 ,
      width : '100%' ,
     

    },


    

   
    titleText: {
      borderWidth : 0.2,
      borderColor : 'white',
      color : 'white' ,
      fontSize : 32 , 
      fontWeight : '800',
      padding : 10 ,
      
      marginRight : 190 ,
     
      
      
  
     
      
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
      flex :2 ,
      height : '100%' , 
      
      
      
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
      flex : 3 ,
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