import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

export default function LivestreamScreen({navigation}){
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Text>Live Stream Page</Text>
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