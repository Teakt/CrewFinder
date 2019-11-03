// Navigation/Navigation.js

import React from 'react'

import { createStackNavigator} from 'react-navigation-stack'
import {  createAppContainer } from 'react-navigation'
import Login from '../components/Login'

const LoginStackNavigator = createStackNavigator({
  Home : { screen : Login}
});

// Navigation/Navigation.

const App =   createAppContainer(LoginStackNavigator)

export default App ; 

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
        onPress={() => navigate('Profile', {name: 'Jane'})}
      />
    );
  }
}