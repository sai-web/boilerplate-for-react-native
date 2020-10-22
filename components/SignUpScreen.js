import React , {useState} from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,TextInput} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'

const createAccount = (email,password) => {
    null
}

export default function SignUpScreen({navigation}){
    let [emailAd,setEmailAd] = useState('');
    let [passwrd,setPasswrd] = useState('');
    return(
        <View style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center"
        }}>
            <View style={{position:"absolute",top:200,width:410,height:700,backgroundColor:"black",borderRadius:40}}>
            <Text style={{textAlign:"center",color:"white",top:70,fontSize:24,fontWeight:"bold"}} >Sign up</Text>
            <TextInput placeholder="username" style={{textAlign:"center",color:"white",borderWidth:0.5,borderColor:"grey",width:300,height:50,borderRadius:50,top:100,left:50}} />
            <TextInput placeholder="password" value={passwrd} onChangeText={(text) => setPasswrd(text)} style={{textAlign:"center",color:"white",borderWidth:0.5,borderColor:"grey",width:300,height:50,borderRadius:50,top:120,left:50}} />
            <TextInput placeholder="re-enter password" style={{textAlign:"center",color:"white",borderWidth:0.5,borderColor:"grey",width:300,height:50,borderRadius:50,top:140,left:50}} />
            <TextInput placeholder="Email address" value={emailAd} onChangeText={(text) => setEmailAd(text)} style={{textAlign:"center",color:"white",borderWidth:0.5,borderColor:"grey",width:300,height:50,borderRadius:50,top:160,left:50}} />
            <TouchableOpacity style={{position:"absolute",top:50,left:20}}  onPress={() => {navigation.navigate('LogInScreen')}}>
                <Icon name="ios-arrow-back" style={{color:"white"}} size={20} />
            </TouchableOpacity>
            <TouchableOpacity style={{top:180,width:150,left:130}} onPress={() => createAccount(emailAd,passwrd)}>
                <Text style={{textAlign:"center",paddingTop:15,height:50,borderRadius:50,backgroundColor:"white"}} >create account</Text>
            </TouchableOpacity>
            </View>
            <Icon name="ios-contact" style={{width:100,height:100,borderRadius:100,textAlign:"center",paddingTop:17,backgroundColor:"#f9f9f9",position:"absolute",top:140,color:"black"}} size={65} />
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