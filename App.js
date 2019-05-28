import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import HomeView from './views/Home'
import RacesView from './views/Races'

const AppNavigator = createStackNavigator(
  {
    Home:{
      screen: HomeView
    },
    Races: {
      screen: RacesView
    }
  },
  {
    initialRouteName: 'Home',
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: '#333'
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontWeight: 'bold'
      }
    }
  }
)

export default createAppContainer(AppNavigator);