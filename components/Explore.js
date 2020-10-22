import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

export default function ExploreScreen({navigation}){
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Text>Explore Page</Text>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})