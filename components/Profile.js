import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'

export default function ProfileScreen({navigation}){
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Text>Profile Page</Text>
            <Button title="Explore" onPress={() => navigation.navigate('Explore')} />
        </View>
    )
}