import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';

import MainScreen from '../screens/MainScreen';
import SettingScreen from '../screens/SettingScreen';
import AboutScreen from '../screens/AboutScreen';
import {AppStackNavigatorMath} from './AppStackNavigatorMath';

export const AppStackNavigator = createStackNavigator({
   MathScreen : {
    screen : AppStackNavigatorMath,
    navigationOptions:{
      headerShown : false
    }
  },
  SettingScreen : {
    screen : SettingScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  AboutScreen :{
    screen : AboutScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'MainScreen'
  }
);
