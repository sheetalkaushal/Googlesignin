import {View, Text, Easing} from 'react-native';
import React from 'react';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from '../Screens/Login/Login';
import Signup from '../Screens/Signup/Signup';
import {NavigationContainer} from '@react-navigation/native';
import OTPverification from '../Screens/OTPverification/OTPverification';
import Verify from '../Screens/Verify/Verify';
import TextField from '../Screens/TextField/TextField';
import Carouseldesign from '../Screens/Carousel/Carouseldesign';
import DynamicScroll from '../Screens/DynamicScroll/DynamicScroll';
import {
  createStackNavigator,
  TransitionPresets,
  CardStyleInterpolators,
} from '@react-navigation/stack';
import Cube from '../Screens/Cube/Cube';
const Stack = createStackNavigator();
const forFade = ({current}) => ({
  cardStyle: {
    opacity: current.progress,
  },
});
const config = {
  animation: 'spring',
  config: {
    stiffness: 1000,
    damping: 50,
    mass: 3,
    overshootClamping: false,
    restDisplacementThreshold: 0.01,
    restSpeedThreshold: 0.01,
  },
};
const closeconfig = {
  animations: 'timing',
  config: {
    duration: 500,
    easing: Easing.linear,
  },
};
const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: true,
          gestureDirection: 'horizontal-inverted',
          // transitionSpec: {
          //   open: config,
          //   close: closeconfig,
          // },
          ...TransitionPresets.SlideFromRightIOS,
          // cardStyleInterpolators:CardStyleInterpolators.forVerticalIOS
        }}>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{cardStyleInterpolator: forFade}}
        />
        <Stack.Screen name="Signup" component={Signup} />
        <Stack.Screen name="OTPverification" component={OTPverification} />
        <Stack.Screen name="Verify" component={Verify} />
        <Stack.Screen name="TextField" component={TextField} />
        <Stack.Screen name="Carouseldesign" component={Carouseldesign} />
        <Stack.Screen name="DynamicScroll" component={DynamicScroll} />
        <Stack.Screen name="Cube" component={Cube} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
