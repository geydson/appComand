import React, { Component } from 'react';
import { createDrawerNavigator } from 'react-navigation';

import HomeComandas from './HomeComandas';

const AppMain = createDrawerNavigator({

     Home:{
         screen: HomeComandas
     }

},{ 
	unmountInactiveRoutes:true,
	navigationOptions:{
	   tabBarLabel: 'Mesas',
	   headerMode:'none'
	     
	}
});


export default AppMain;