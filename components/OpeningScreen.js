import React from 'react'
import {View,Text,StyleSheet,TouchableOpacity,Image,useRef} from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import { Button } from 'react-native-paper'
import * as Animatable from 'react-native-animatable'
import Icon from 'react-native-vector-icons/Ionicons' 

export default function MainScreen({navigation}){
    return(
        <View
            style={{
            flex:1,
            justifyContent:"center",
            alignItems:"center",
            backgroundColor:"white"
        }}>
            <Image source={require('../assets/backup.jpg')} style={{position:"absolute",bottom:400}} />
            <View style={{flex:1,width:411}} >
                <Text style={{position:"absolute" ,fontSize:25,top:40,left:100,fontWeight:"bold"}} >Welcome to Pulse</Text>
                <Image source={require('../assets/background.jpg')} style={{position:"absolute",top:180,left:100,borderColor:"green",borderWidth:2,borderRadius:100}}/>
            </View>
            <Animatable.View animation="fadeInUpBig" style={{flex:0.62,width:411,backgroundColor:"black",borderTopRightRadius:30,borderTopLeftRadius:30}} >
                <Text style={{fontSize:25,color:"white",textAlign:"center",paddingTop:20,fontWeight:"bold"}} >Have the best streaming experience!</Text>
                <Text style={{position:"absolute",color:"white",top:130,fontWeight:"bold",left:115,color:"#43a6c6",fontSize:17}}>Read the Documentation</Text>
                <Text style={{color:"white",textAlign:"center",top:130,left:20,width:370}} >Read our <Text style={{color:"#43a6c6"}}>Privacy Policy</Text>. Tap "Agree and continue" to accept the <Text style={{color:"#43a6c6"}}>Terms of service.</Text></Text>
                <View style={{width:150}} >
                    <TouchableOpacity style={{width:150,backgroundColor:"green",borderRadius:50,height:40,top:150,left:130}} onPress={() => {navigation.navigate('LogInScreen')}}>
                        <Text style={{color:"white",textAlign:"center",paddingTop:10}}>Accept and continue</Text>
                    </TouchableOpacity>
                </View>
            </Animatable.View>
            <Animatable.Image animation="bounceIn" source={require('../assets/icon.png')} style={{position:"absolute",top:480}} />
            <Animatable.View animation="bounceInLeft" duration={5500} style={{position:"absolute",left:0,paddingTop:0}} >
                <TouchableOpacity >
                <Icon name="ios-chatbubbles" style={{position:"absolute",top:8,left:5,color:"blue"}} size={15} />
                <Text style={{position:"absolute",top:0,color:"green",left:22,fontSize:20}}>|</Text>
                <Text style={{paddingLeft:30,paddingTop:5,paddingRight:20,borderWidth:1,borderColor:"green",height:30,borderRadius:30}} >Chat</Text>
                </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="bounceInLeft" delay={1000} duration={5500} style={{position:"absolute",left:0,paddingTop:70}} >
            <TouchableOpacity>
                <Icon name="ios-radio" style={{position:"absolute",top:8,left:5,color:"blue"}} size={15}/>
                <Text style={{position:"absolute",top:0,color:"green",left:22,fontSize:20}}>|</Text>
                <Text style={{paddingLeft:30,paddingTop:5,paddingRight:20,borderWidth:1,borderColor:"green",textAlign:"center",height:30,borderRadius:30}} >Live streams</Text>
                </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="bounceInLeft" delay={2000} duration={5500} style={{position:"absolute",left:0,paddingTop:140}} >
            <TouchableOpacity>
                <Icon name="ios-send" style={{position:"absolute",top:8,left:5,color:"blue"}} size={15} />
                <Text style={{position:"absolute",top:0,color:"green",left:22,fontSize:20}}>|</Text>
                <Text style={{paddingLeft:30,paddingTop:5,paddingRight:20,borderWidth:1,borderColor:"green",borderRadius:30,height:30}}>Quick notifications</Text>
                </TouchableOpacity>
            </Animatable.View>

            <Animatable.View animation="bounceInRight" duration={5500} style={{position:"absolute",right:0,paddingTop:0}} >
            <TouchableOpacity>
                <Icon name="logo-ionitron" style={{position:"absolute",top:8,right:5,color:"blue"}} size={15} />
                <Text style={{position:"absolute",top:0,color:"green",right:22,fontSize:20}}>|</Text>
                <Text style={{paddingLeft:20,paddingTop:5,paddingRight:30,borderWidth:1,borderColor:"green",height:30,borderRadius:30}} >Best UI</Text>
                </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="bounceInRight" delay={1000} duration={5500} style={{position:"absolute",right:0,paddingTop:70}} >
            <TouchableOpacity>
                <Icon name="md-videocam" style={{position:"absolute",top:8,right:5,color:"blue"}} size={15}/>
                <Text style={{position:"absolute",top:0,color:"green",right:22,fontSize:20}}>|</Text>
                <Text style={{paddingLeft:20,paddingTop:5,paddingRight:30,borderWidth:1,borderColor:"green",textAlign:"center",height:30,borderRadius:30}} >Video calls</Text>
                </TouchableOpacity>
            </Animatable.View>
            <Animatable.View animation="bounceInRight" delay={2000} duration={5500} style={{position:"absolute",right:0,paddingTop:140}} >
            <TouchableOpacity>
                <Icon name="ios-color-filter" style={{position:"absolute",top:8,right:5,color:"blue"}} size={15} />
                <Text style={{position:"absolute",top:0,color:"green",right:22,fontSize:20}}>|</Text>
                <Text style={{paddingLeft:20,paddingTop:5,paddingRight:30,borderWidth:1,borderColor:"green",borderRadius:30,height:30}}>Chronological feed</Text>
                </TouchableOpacity>
            </Animatable.View>
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