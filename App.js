import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/Navigations/Routes';
import TextField from './src/Screens/TextField/TextField';
import Carouseldesign from './src/Screens/Carousel/Carouseldesign';
import DynamicScroll from './src/Screens/DynamicScroll/DynamicScroll';
import Cube from './src/Screens/Cube/Cube';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Routes /> */}
      {/* <Carouseldesign/> */}
      {/* <DynamicScroll /> */}
      <Cube/>
    </View>
  );
};

export default App;
