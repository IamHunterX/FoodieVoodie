import { StatusBar } from 'expo-status-bar';
import { Button, Image,StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={{flex:1,flexDirection:'column'}}>
      <View style={{backgroundColor:'grey',flex:0.20,justifyContent:'center',alignItems:'center'}}>
        <Image 
        style={{width:50,height:50}}
        source ={require("./assets/Logo.png")}
        />
      </View>
      {/* <Text></Text> */}
      {/* <View style={{backgroundColor:'blue',flex:0.20}}></View> */}
      <View style={{backgroundColor:'black',flex:0.60,justifyContent:'center',alignItems:'center'}}>
        <Text
        style={{backgroundColor:'#blue',marginBottom:10,fontSize:16}}>Login</Text>
        <TextInput
        style={{width:150,height:35,backgroundColor:'white',marginBottom:15}}>
        </TextInput>
        <TextInput
        style={{width:150,height:35,backgroundColor:'white',marginTop:5.0,}}>
        </TextInput>
      </View>
      <View style={{backgroundColor:'green',flex:0.20,justifyContent:'center',alignItems:'center'}}>
        {/* <Button>"Click"</Button> */}
        {/* <Button>Primary</Button>   */}
        <TouchableOpacity style={{width:200,height:35,justifyContent:'center',alignItems:'center'}}>
          <Text style={{backgroundColor:'orange',fontSize:16,fontStyle:'italic',}}>login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{width:200,height:35,justifyContent:'center',alignItems:'center'}}>
          <Text style={{backgroundColor:'orange',fontSize:16,fontStyle:'italic'}}>Forget Password?</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto"/>
    </View>
    
  );
}


