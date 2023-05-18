import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import {NavigationContainer} from '@react-navigation/native';
import OTPverification from '../Screens/OTPverification/OTPverification';
import Verify from '../Screens/Verify/Verify';
import TextField from '../Screens/TextField/TextField';
import Carouseldesign from '../Screens/Carousel/Carouseldesign';


const Stack = createNativeStackNavigator();
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OTPverification" component={OTPverification} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="TextField" component={TextField}/>
        <Stack.Screen name="Carouseldesign" component={Carouseldesign}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
