import React from 'react'



import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  TextInput,
  Dimensions,
  Button, 
  Animated,
  PanResponder //Pour detecter les swipe

} from 'react-native'

let Users = [
  
  { id : "1" , uri: require('../assets/1.jpg') , skill : "C++" , name : "Robert BUI" , function : "Student"},
  { id : "2" , uri: require('../assets/2.jpg'),  skill : "Node.js" , name : "Joseph BANZIO" , function : "Secretary General"}, 
  { id : "3" , uri: require('../assets/3.jpg'),  skill : "C" , name : "Beker BAWILU" , function : "Steak Eater"},
  { id : "4" , uri: require('../assets/4.jpg'),  skill : "Word/Excel" , name : "Bill GATES" , function : "Former CEO of Microsoft"},
  { id : "5" , uri: require('../assets/5.jpg') ,skill : "Google Form" , name : "Sundar PICHAI" , function : "CEO of Google"},
  { id : "6" , uri: require('../assets/6.jpg'),skill : "HTML/CSS" , name : "Marissa MAYER" , function : "CEO of Yahoo"},
  { id : "7" , uri: require('../assets/7.jpg'),skill : "C++" , name : "Mark ZUKENBERG" , function : "CEO of Facebook"},
  { id : "8" , uri: require('../assets/8.jpg'),skill : "C#" , name : "Guillaume TEAK" , function : "Game Developer"},
]

import bgImage from '../images/background.png'
import logo from '../images/logo.png'



const { width: WIDTH } = Dimensions.get('window')
const { height: HEIGHT } = Dimensions.get('window')


export default class Finder extends React.Component {
  constructor(){
    super()
    
    this.position = new Animated.ValueXY()
    this.state = {
      currentIndex : 0 
    }
    this.rotate = this.position.x.interpolate({
      inputRange : [-WIDTH/2 , 0 , WIDTH],
      outputRange : ['-10deg','0deg','10deg'],
      extrapolate : 'clamp'
    })

    this.rotateAndTranslate = {
      transform : [{
        rotate : this.rotate
      },
      ...this.position.getTranslateTransform()
    
      ]
      }



      this.likeOpacity = this.position.x.interpolate({
        inputRange: [-WIDTH / 2, 0 , WIDTH/2],
        outputRange: [0, 0, 1],
        extrapolate: 'clamp'
      })


      this.dislikeOpacity = this.position.x.interpolate({
        inputRange: [-WIDTH / 2, 0 , WIDTH/2],
        outputRange: [1, 0, 0],
        extrapolate: 'clamp'
      })

      this.nextCardOpacity = this.position.x.interpolate({
        inputRange: [-WIDTH / 2, 0 , WIDTH/2],
        outputRange: [1, 0, 1],
        extrapolate: 'clamp'
      })

      this.nextCardScale = this.position.x.interpolate({
        inputRange: [-WIDTH / 2, 0 , WIDTH/2],
        outputRange: [1, 0.8, 1],
        extrapolate: 'clamp'
      })
   }

    

    UNSAFE_componentWillMount(){
    this.PanResponder = PanResponder.create({
      onStartShouldSetPanResponder: (evt , gestureState ) => true ,
      onPanResponderMove:(evt,gestureState) => {
          this.position.setValue({x : gestureState.dx, y : gestureState.dy})
      },
      onPanResponderRelease:(evt , gestureState) => {
        
        if(gestureState.dx>120){
          Animated.spring(this.position,{
            toValue:{x:WIDTH+100,y:gestureState.dy}
          }).start(()=>{
            this.setState({currentIndex:this.state.currentIndex+1}, ()=>{
              this.position.setValue({x:0,y:0})
            })
          })
        }
        else if(gestureState.dx < -120){
          Animated.spring(this.position,{
            toValue:{x:-WIDTH-100,y:gestureState.dy}
          }).start(()=>{
            this.setState({currentIndex:this.state.currentIndex+1}, ()=>{
              this.position.setValue({x:0,y:0})
            })
          })
        }
        else {
          
          Animated.spring(this.position,{
            toValue:{x:0,y:0},
            friction : 4 

          }).start()
        
        }
      }
    })
  }

  renderUsers = () =>{
    return Users.map( (item,i) => {

      if(i < this.state.currentIndex){
        return null
      }
      else if(i == this.state.currentIndex){
        return (
          <Animated.View
           {...this.PanResponder.panHandlers}
           key={item.id} style={[this.rotateAndTranslate,{height:
           HEIGHT - 120, width : WIDTH , padding :  40 , position : 
           'absolute'}]}>

           <Animated.View style={{opacity : this.likeOpacity  , transform : [ {rotate: '-30deg'}],position : 'absolute' , top : 30 , left : 30,zIndex : 1000 }} >
              <Text style={styles.like}>
                LIKE 
              </Text>



           </Animated.View>

           <Animated.View style={{opacity : this.dislikeOpacity ,transform : [ {rotate: '30deg'}],position : 'absolute' , top : 30 , right : 30,zIndex : 1000 }} >
              <Text style={styles.nope}>
                NOPE
              </Text>



           </Animated.View>
                    
                    
                    
                    
                    
                    <Image
                      style={styles.users}
                      source = {item.uri} 
                    />
                    <Text style={styles.description}>
                       <Text style={styles.nom}>
                        {item.name}
                         </Text>{"\n"}{item.skill}{"\n"}{item.function}
                    </Text>
                    
           </Animated.View>
        )
      }
      else {
        return (
          <Animated.View
           
           key={item.id} style={[{
             opacity : this.nextCardOpacity,
             transform: [{scale : this.nextCardScale}],
             height:
           HEIGHT - 120, width : WIDTH , padding :  40 , position : 
           'absolute',
           }]}>

           <Animated.View style={{opacity : 0  , transform : [ {rotate: '-30deg'}],position : 'absolute' , top : 30 , left : 30,zIndex : 1000 }} >
              <Text style={styles.like}>
                LIKE 
              </Text>



           </Animated.View>

           

           <Animated.View style={{opacity : 0 ,transform : [ {rotate: '30deg'}],position : 'absolute' , top : 30 , right : 30,zIndex : 1000 }} >
              <Text style={styles.nope}>
                NOPE
              </Text>



           </Animated.View>
                    
                    
                    
                    
                    
                    <Image
                      style={styles.users}
                      source = {item.uri} 
                    />
                    <Text style={styles.descriptionbis}>
                       <Text style={{color : "black"}}>
                        {item.name}
                         </Text>{"\n"}{item.skill}{"\n"}{item.function}
                    </Text>
  
                    
           </Animated.View>
        )
  
      }

      


    }).reverse()

  }


  render() {


    





    return (
  

      
      

      
      <ImageBackground source={bgImage} style={styles.backgroundContainer}>
            <View style={{height : 10}}>

            </View> 

            <View style={styles.content}>
              {this.renderUsers()}
            </View>

            <View style={{height : 60}}>

            </View> 


            <View style={styles.button}>
            <Button
              title="Chat"
              onPress={() => this.props.navigation.navigate('Page2')}
              />
            </View>
            
           

           
            
      </ImageBackground>
      
     
      
    )
  }
}




const styles = StyleSheet.create({
    like: {
      borderWidth : 1,
      borderColor : 'cyan',
      color : 'cyan' ,
      fontSize : 32 , 
      fontWeight : '800',
      padding : 10 
      

    },
    nope: {
      borderWidth : 1,
      borderColor : 'red',
      color : 'red' ,
      fontSize : 32 , 
      fontWeight : '800',
      padding : 10 
      

    },
    description: {
      borderWidth : 1,
      borderColor : 'white',
      color : 'white' ,
      fontSize : 32 , 
      fontWeight : '800',
      padding : 10 ,
      textAlign : "center" ,

    },

    descriptionbis: {
      borderWidth : 1,
      borderColor : 'white',
      color : 'white' ,
      fontSize : 32 , 
      fontWeight : '800',
      padding : 10 ,
      textAlign : "center" ,
      opacity : 0 ,
    },

    nom: {
      
      color : 'gold' ,
      fontSize : 40 , 
      fontWeight : '800',
    
    
    },

   
    backgroundContainer: {
      flex : 1 ,
      

    },

    content: {
      flex : 1 ,
      width : '100%' ,
      height : '100%' , 
      height : 60 , 

    },

    users : {
      flex : 1 , 
      height: null ,
      width : null , 
      resizeMode : 'cover', 
      borderRadius : 20 ,
    },




    

    button:{
    
      width : '100%' ,
      
      alignItems : "center" ,
      height : 60 ,  
      
      
    
      
    },


   

});