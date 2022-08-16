import {StyleSheet, Text, View, TextInput, Dimensions} from 'react-native';
import React from 'react';
const {height, width} = Dimensions.get('screen');

const SignUp = props => {
  return <View style={{height: height * 1, width: width * 1}}>
    <View style={{backgroundColor:'red', height:height*0.3, width:width*0.9, alignSelf:'center'}}>
<View style={{}}>
    <Text style={{color:'black', fontWeight:'bold', fontSize:24}}>
    Create Account
    </Text>
</View>
    </View>
  </View>;
};

export default SignUp;

const styles = StyleSheet.create({});
