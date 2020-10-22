import React, {useState,useEffect} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,TextInput,Image,KeyboardAvoidingView} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import * as firebase from 'firebase'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'

import users from '../Database/Users'

export default function LogInScreen({navigation}){
    let [user,setuser] = useState('');
    let [passwrd,setPasswrd] = useState('');
    let users = []

    const logUserIn = (username,password) => {
        fetch('http://192.168.0.141:5000/users').then(responsej => responsej.json()).then(response => users = response.users )
        for(var i in users){
            if((username == users[i].username) && (password == users[i].password)){
                navigation.navigate('Pulse');
            }
        }
    }

    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"white"
        }}>
            <Image source={require('../assets/backup.jpg')} style={{position:"absolute",top:60}} />
            <Text style={{fontSize:20,top:100,fontWeight:"bold"}}>Get started with a Pulse account</Text>
            <Icon name="ios-checkmark-circle-outline" size={70} style={{top:200,color:"green"}} />
            <Animatable.View animation="fadeInUpBig" delay={2000} style={{position:"absolute",top:300,width:410,height:600,backgroundColor:"black",borderRadius:40}} >
                <Text style={{textAlign:"center",color:"white",top:70,fontSize:24,fontWeight:"bold"}} >Sign in</Text>
                    <TextInput placeholder="Email" value={user} onChangeText={(text) => setuser(text)} style={{textAlign:"center",color:"white",borderWidth:0.5,borderColor:"grey",width:300,height:50,borderRadius:50,top:100,left:50}} />
                    <TextInput placeholder="password" value={passwrd} onChangeText={(text) => setPasswrd(text)} style={{position:"absolute",textAlign:"center",color:"white",borderWidth:0.5,borderColor:"grey",width:300,height:50,borderRadius:50,bottom:350,left:50}} />
                <TouchableOpacity style={{position:"absolute",bottom:550,left:20}}  onPress={() => {navigation.navigate('OpeningScreen')}}>
                    <Icon name="ios-arrow-back" style={{color:"white"}} size={20} />
                </TouchableOpacity>

                <TouchableOpacity onPress={() => logUserIn(user,passwrd)} style={{top:250,width:100,left:155}}>
                    <Text style={{textAlign:"center",paddingTop:15,height:50,borderRadius:50,backgroundColor:"white"}} >LOGIN</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{top:270,left:135,width:150}} onPress={() => alert('re-configure your password through our website')}>
                    <Text style={{color:"#43a6c6"}}>I forgot my password</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('SignUpScreen')} style={{top:290,left:135,width:150}}>
                    <Text style={{color:"#43a6c6"}}>Create a new account!</Text>
                </TouchableOpacity>
            </Animatable.View>
            <Icon name="ios-contact" style={{width:100,height:100,borderRadius:100,textAlign:"center",paddingTop:17,backgroundColor:"#f9f9f9",position:"absolute",top:240,color:"black"}} size={65} />
        </View>
    )
}