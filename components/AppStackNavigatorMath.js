import React from 'react';
import { createStackNavigator } from 'react-navigation-stack';
import MTestScreen from '../screens/MTestScreen';
import MWorksheetScreen from '../screens/MWorksheetScreen';
import MLearnScreen from '../screens/MLearnScreen';

export const AppStackNavigatorMath = createStackNavigator({
  MTestScreen : {
    screen : MTestScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  MWorksheetScreen : {
    screen : MWorksheetScreen,
    navigationOptions:{
      headerShown : false
    }
  },
  MLearnScreen :{
    screen : MLearnScreen,
    navigationOptions:{
      headerShown : false
    }
  }
},
  {
    initialRouteName: 'MTestScreen'
  }
);
