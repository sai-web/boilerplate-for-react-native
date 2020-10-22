import React from 'react'
import {View,Text,StyleSheet,Button} from 'react-native'

export default function ChatScreen({navigation}){
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <Text>Chat Page</Text>
            <Button title="Profile" onPress={() => navigation.navigate('Profile')} />
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