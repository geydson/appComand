import React, { Component } from 'react';
import { createStackNavigator, createAppContainer} from 'react-navigation';

import Login  from './src/screens/Login';
import MainScreen from './src/screens/MainScreen';

const Navegador = createStackNavigator({

     Home:{
        screen: Login
     },
     MainScreen:{
       screen: MainScreen
     }

}, {
    defaultNavigationOptions:{
        headerMode:'none',
    }
});

const AppContainer = createAppContainer(Navegador);

export default AppContainer;