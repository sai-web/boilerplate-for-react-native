import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MainScreen from './components/OpeningScreen'
import SignUpScreen from './components/SignUpScreen'
import LogInScreen from './components/LogInScreen'

import Icons from 'react-native-vector-icons/Ionicons'

import {NavigationContainer} from '@react-navigation/native'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import Icon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import Custom from './RenderTheComponents'


const Stack = createStackNavigator()

export default function Root(){
  return(
    <Stack.Navigator headerMode="none">
        <Stack.Screen name="OpeningScreen" component={MainScreen} />
        <Stack.Screen name="LogInScreen" component={LogInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="Pulse" component={Custom} />
    </Stack.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    textAlign:"center",
    justifyContent:"center"
  },
});