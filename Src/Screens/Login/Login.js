import { StyleSheet, Text, View ,Dimensions,TextInput, TouchableOpacity} from 'react-native'
import React from 'react'
const {height,width} = Dimensions.get("screen");
const Login = (props) => {
  return (
    <View style={{height: height * 1, width: width * 1}}>
    <View style={{ height:height*0.2, width:width*0.9, alignSelf:'center', justifyContent:'center'}}>
<View style={{}}>
    <Text style={{color:'black', fontWeight:'bold', fontSize:24}}>
    Login
    </Text>
</View>
<View style={{}}>
    <Text style={{color:'#555555', fontWeight:'400', fontSize:14}}>
    Login to get started
    </Text>
</View>
    </View>

      <View
        style={{
          height: height * 0.22,
          width: width * 0.9,
          alignSelf: 'center',
          // backgroundColor: 'red',
        }}>

       
        <View style={styles.InputmainView}>
          <View>
            <Text style={{color: 'black'}}>Email Address</Text>
          </View>
          <View style={styles.textInputMainView}>
            <View style={styles.textInputView}>
              <TextInput placeholder="Enter Email" placeholderTextColor={"#A9A9A9"  }></TextInput>
            </View>
          </View>
        </View>
        
        <View style={styles.InputmainView}>
          <View>
            <Text style={{color: 'black'}}>Password</Text>
          </View>
          <View style={styles.textInputMainView}>
            <View style={styles.textInputView}>
              <TextInput placeholder="Enter Password" placeholderTextColor={"#A9A9A9"  }></TextInput>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity>

      <View style={{height:height*0.1,width:width*0.9, alignSelf:'center'}}>
<Text style={{color : "#F26837",textAlign:'right', fontStyle:'italic'}}>
Forgot Password?
</Text>
      </View>
      </TouchableOpacity>
      <TouchableOpacity>

<View style={{height:height*0.1,width:width*0.9, alignSelf:'center', justifyContent:'center',}}>
<TouchableOpacity onPress={() => props.navigation.navigate("Login")}> 
<View style={{height:height*0.06, width:width*0.9, alignSelf:'center', justifyContent:'center', backgroundColor:'#F26837', borderRadius:4,}}>
   <Text style={{textAlign:'center', color:'white',fontWeight:'bold'}}>
        Login
    </Text>
</View>
   </TouchableOpacity>
</View>
</TouchableOpacity>
    
  </View>
  )
}

export default Login

const styles = StyleSheet.create({ textInputView: {
  height: height * 0.07,
  width: width * 0.8,
  justifyContent: 'center',
  alignSelf: 'center',
},
textInputMainView: {
  height: height * 0.07,
  width: width * 0.9,
  alignSelf: 'center',
  // backgroundColor: 'green',
},
InputmainView: { height: height * 0.11},
});
