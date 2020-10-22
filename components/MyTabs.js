import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import {Badge} from 'react-native-paper'

import ChatScreen from './ChatScreen'
import HomeScreen from './HomeScreen'
import ProfileScreen from './Profile'
import ExploreScreen from './Explore'
import LiveStreamScreen from './LiveStream'

import {withBadge} from 'react-native-elements'

import Icons from 'react-native-vector-icons/Ionicons'

import {createDrawerNavigator} from '@react-navigation/drawer'
import {createStackNavigator, HeaderBackground} from '@react-navigation/stack'
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import Icon from 'react-native-vector-icons/Ionicons';

const Stack = createStackNavigator()
const Tab = createMaterialBottomTabNavigator()

const HomeNotifications = 15,ChatNotifications = 5,ExploreNotifications = null;

const HomeBadgeIcon = withBadge(HomeNotifications)(Icon)
const ChatBadgeIcon = withBadge(ChatNotifications)(Icon)
const ExploreBadgeIcon = withBadge(ExploreNotifications)(Icon)

const HomeStack = ({navigation}) => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} options={{title:"                     Home",headerLeft:() => (<Icon.Button name="ios-menu" size={25} color="black" backgroundColor="white"
        onPress = {() => {navigation.openDrawer()}}></Icon.Button>)}} />
      </Stack.Navigator>
    )
  }
  
  const ChatStack = ({navigation}) => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Chat" component={ChatScreen} options={{title:"                      Chat",headerLeft:() => (<Icon.Button name="ios-menu" size={25} color="black" backgroundColor="white"
        onPress = {() => {navigation.openDrawer()}}></Icon.Button>)}} />
      </Stack.Navigator>
    )
  }
  
  const ProfileStack = ({navigation}) => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{title:"                    Profile",headerLeft:() => (<Icon.Button name="ios-menu" size={25} color="black" backgroundColor="white"
        onPress = {() => {navigation.openDrawer()}}></Icon.Button>)}} />
      </Stack.Navigator>
    )
  }
  
  const ExploreStack = ({navigation}) => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="Explore" component={ExploreScreen} options={{title:"                    Explore",headerLeft:() => (<Icon.Button name="ios-menu" size={25} color="black" backgroundColor="white"
        onPress = {() => {navigation.openDrawer()}}></Icon.Button>)}} />
      </Stack.Navigator>
    )
  }
  const LiveStreamStack = ({navigation}) => {
    return(
      <Stack.Navigator>
        <Stack.Screen name="LiveStream" component={LiveStreamScreen} options={{title:"                       Live",headerLeft:() => (<Icon.Button name="ios-menu" size={25} color="black" backgroundColor="white"
        onPress = {() => {navigation.openDrawer()}}></Icon.Button>)}} />
      </Stack.Navigator>
    )
  }

  const MyTabs = () => {
    return(
      <Tab.Navigator initialRouteName="Home"
      activeColor="white" backBehavior="initialRoute" >
        <Tab.Screen name="Home" component={HomeStack} options={{tabBarIcon: ({color}) => (<HomeBadgeIcon type="ionicon" name="ios-home" size={25} />),title:"",tabBarColor:"#f6f6f6"}}  />
        <Tab.Screen name="Chat" component={ChatStack} options={{tabBarIcon: ({color}) => (<ChatBadgeIcon type="ionicon" name="ios-chatboxes" size={25} />),title:"",tabBarColor:"#f6f6f6"}}/>
        <Tab.Screen name="LiveStream" component={LiveStreamStack} options={{tabBarIcon: ({color}) => (<ExploreBadgeIcon type="ionicons" name="ios-radio" size={25} badgeStyle={{left:10}} />),title:"",tabBarColor:"#f6f6f6"}}/>
        <Tab.Screen name="Profile" component={ProfileStack} options={{tabBarIcon: ({color}) => (<ExploreBadgeIcon type="ionicons" name="ios-person" size={25} badgeStyle={{left:10}} />),title:"",tabBarColor:"#f6f6f6"}}/>
        <Tab.Screen name="Explore" component={ExploreStack} options={{tabBarIcon: ({color}) => (<Icons name="ios-aperture" size={25}/>),title:"",tabBarColor:"#f6f6f6"}}/>
      </Tab.Navigator>
    )
  }
export default MyTabs