import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {NavigationContainer} from '@react-navigation/native'
import {createDrawerNavigator} from '@react-navigation/drawer'
import MyTabs from './components/MyTabs'
import {DrawerStuff}  from './components/DrawerStuff'

const Drawer = createDrawerNavigator()

export default function Custom(){
    return(
      <NavigationContainer independent={true}>
        <Drawer.Navigator drawerContent={props => <DrawerStuff {...props} />} screenOptions={{headerStyle:{
          backgroundColor : '#009387'
        }}}>
          <Drawer.Screen name="Home" component={MyTabs} />
        </Drawer.Navigator>
      </NavigationContainer>
    )
  }