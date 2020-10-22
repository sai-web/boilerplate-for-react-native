import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Root from './RootStack'

import ChatScreen from './components/ChatScreen'
import HomeScreen from './components/HomeScreen'
import ProfileScreen from './components/Profile'
import ExploreScreen from './components/Explore'

import Icons from 'react-native-vector-icons/Ionicons'

import {NavigationContainer} from '@react-navigation/native'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import MyTabs from './components/MyTabs'

import {DrawerStuff}  from './components/DrawerStuff'

const Drawer = createDrawerNavigator()
export default function App(){
  return(
    <NavigationContainer>
      <Root />
      {/*<Drawer.Navigator drawerContent={props => <DrawerStuff {...props} />} screenOptions={{headerStyle:{
        backgroundColor : '#009387'
      }}}>
        <Drawer.Screen name="Home" component={MyTabs} />
    </Drawer.Navigator>*/}
    </NavigationContainer>
  )
}

