import React,{useState} from 'react'
import { View,Text,StyleSheet,TextInput,TouchableOpacity,FlatList,ScrollView,SafeAreaView,Image,TouchableWithoutFeedback } from 'react-native'
import { Avatar, Caption, Switch, Button } from 'react-native-paper'
import {ListItem} from 'react-native-elements'
import Icon from 'react-native-vector-icons/Ionicons';
import users from '../Database/Users'

const following = 20, stars = 20, notifications = 20;
const name = "Sai Sumith", tag = "@saicorp";
var keyVals = 1
let BottomTypeArea = () => {
    let lenghtOfList = users.length-1

    const AccessViewers = () => {
        return(
            <View style={{height:548,top:20}}>
                <ScrollView>
                        {
                            users.map((item,i) => (item.name == name ? null :
                                (<TouchableOpacity onLongPress={() => alert(i)} key={i}>
                                    <ListItem 
                                        leftAvatar = {{source:item.avatar_url} }
                                        title = {item.name}
                                        subtitle={item.subtitle}
                                        titleStyle={{fontSize:15}}
                                        subtitleStyle={{fontSize:10}}
                                        badge={{value:item.badgeValue,right:200,bottom:15}}
                                        style={{height:24}}
                                    />
                                    <Icon name={item.status === 'online'? "ios-checkmark" : "ios-information"} style={{left:230,borderColor:item.status === "online"?"green":"red",borderWidth:0.5,width:20,borderRadius:50,height:20,
                                textAlign:"center",paddingTop:4,color:item.status === 'online'? "green" : "red"}} />
                                <Icon name="ios-arrow-forward" style={{left:267,bottom:17,color:"grey"}} />
                                </TouchableOpacity>)
                            ))
                        }
                </ScrollView>
            </View>
        )
    }

    return(
        <View>
            <Text style={{left:10,top:10,fontSize:15}} >Viewers({lenghtOfList})</Text>
            <AccessViewers />
            <Icon name="ios-log-out" size={30} style={{position:"absolute",top:560,left:250}} onPress={() => alert('log out')} />
        </View>
    )
}

export function DrawerStuff(props){
    const [onned,ison] = React.useState(false)
    return(
            <View>
                <View style={styles.drawerContent}>
                    <View style={styles.profile}>
                        <Avatar.Image source={require('../assets/saip.png')}/>
                        <Icon name="md-create" size={15} style={{left:47,color:"white",bottom:25,width:30,height:30,borderRadius:50,backgroundColor:"grey",textAlign:"center",paddingTop:7}} onPress={() => alert("profile")} />
                    </View>
                    <View style={styles.content}>
                        <Text style={{fontSize:17}}> {name} </Text>
                        <Caption> {tag} </Caption>
                    </View>
                </View>
                <View style={styles.drawerContent,styles.container}>
                    <View>
                        <Text style={{paddingLeft:18}}>{following}</Text>
                        <Caption>following</Caption>
                    </View>
                    <View>
                        <Text style={{paddingLeft:5}}> {stars} </Text>
                        <Caption>stars</Caption>
                    </View>
                    <View>
                        <Text style={{paddingLeft:25}}> {notifications} </Text>
                        <Caption>notifications</Caption>
                    </View>
                </View>
                <View style={{backgroundColor:"#404142",height:100}}>
                    <Text style={{fontSize:17,paddingLeft:10,paddingTop:30,color:"white"}}>Preferences</Text>
                    <View style={{flexDirection:"row"}}>
                        <Text style={{fontSize:12,paddingLeft:20,paddingTop:10,color:"white"}}>Dark Theme</Text>
                        <Switch style={{paddingLeft:140,paddingTop:10}} value={onned} onValueChange={(value) => ison(value)} trackColor={{true:"black"}} />
                    </View>
                </View>
                <BottomTypeArea />
            </View>
    )
}

const styles = StyleSheet.create(
    {
        drawerContent:{
            flex:1,
            paddingLeft:20,
            flexDirection:"row"
        },
        profile:{
            paddingTop:50
        },
        content:{
            paddingTop:60,
            paddingLeft:20
        },
        container:{
            paddingTop:120,
            flexDirection:"row",
            justifyContent:"space-evenly"
        },
        icon:{
            color:"black"
        }
    }
)