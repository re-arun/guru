import * as React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from './Src/Screens/Splash/Splash';
import Slogin1 from './Src/Screens/SocialLogin/Slogin1';
import Slogin2 from './Src/Screens/SocialLogin/Slogin2';
import Login from './Src/Screens/Login/Login';
import SignUp from './Src/Screens/SignUp/SignUp';
import History from './Src/Screens/History.js/History';
function HomeScreen(props) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Home Screen</Text>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Splash"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="Splash" component={Splash} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Slogin1" component={Slogin1} />
        <Stack.Screen name="Slogin2" component={Slogin2} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="History" component={History} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
