import React from 'react'
import {View,Text,StyleSheet,Button,ScrollView,TouchableOpacity, Image} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import users from '../Database/Users'
import {ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons'
import { Avatar } from 'react-native-paper'

const name = 'Sai Sumith'

export default function HomeScreen({navigation}){
    return(
        <View style={{backgroundColor:"white"}}>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    users.map((item,i) => (item.name == name ? null :
                        (<TouchableOpacity onLongPress={() => alert(i)} key={i} style={{height:60}}>
                            <ListItem 
                                leftAvatar = {{source:item.avatar_url} }
                                style={{width:56}}
                            />
                        </TouchableOpacity>)
                    ))
                }
            </ScrollView>
            <Text style={{position:"absolute",top:130,left:70,fontWeight:"bold"}}>Jacob Menon</Text>
            <Text style={{position:"absolute",top:133,left:160,fontSize:10}}>@JAenterprises</Text>
            <Icon name="ios-checkmark" style={{position:"absolute",top:130,left:350,paddingLeft:7,paddingTop:4,borderWidth:0.5,borderColor:"green",color:"green",borderRadius:20,width:20,height:20}} />
            <Image source={{uri: "https://jabarpos.net/wp-content/uploads/2019/05/1557414079_maxresdefault-780x405.jpg"}} style={{top:100,left:18,width:370,height:200,borderRadius:15}} />
            <View style={{top:70,justifyContent:"space-evenly",left:15,flexDirection:"row"}}>
                <Icon name="ios-text" size={20} style={{color:"white"}} /> 
                <Icon name="ios-heart-empty" size={20} style={{color:"white"}} /> 
                <Icon name="ios-link" size={20} style={{color:"white"}} />
                <Icon name="md-paper-plane" size={20} style={{color:"white"}} />
            </View>
            <Image source={require('../assets/profile1.png')} style={{position:"absolute",top:130,width:50,height:50,borderRadius:50,left:5}} />
        </View>
    )
}