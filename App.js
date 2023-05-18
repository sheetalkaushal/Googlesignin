import {View, Text} from 'react-native';
import React from 'react';
import Routes from './src/Navigations/Routes';
import TextField from './src/Screens/TextField/TextField';
import Carouseldesign from './src/Screens/Carousel/Carouseldesign';
const App = () => {
  return (
    <View style={{flex: 1}}>
      {/* <Routes /> */}
      <Carouseldesign/>

    </View>
  );
};

export default App;
