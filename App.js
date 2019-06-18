import React from 'react';

import {
  createStackNavigator,
  createAppContainer,
} from 'react-navigation'

import HomeView from './views/Home'
import RacesView from './views/Races'
import SeasonView from './views/Season'
import DriversView from './views/Drivers'

const AppNavigator = createStackNavigator(
  {
    Home:{
      screen: HomeView
    },
    Races: {
      screen: RacesView
    },
    Season: {
      screen: SeasonView
    },
    Drivers: {
      screen: DriversView
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