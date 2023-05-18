import {View, Text, TextInput, StyleSheet, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {moderateScale} from 'react-native-size-matters';
import Carouseldesign from '../Carousel/Carouseldesign';
const TextField = ({navigation}) => {
  const [name, setName] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);
  };

  const labelStyle = {
    position: 'relative',
    left: !isFocused ? 0 : 15,
    top: !isFocused ? 0 : 8,
    color: !isFocused ? '#a4b1e8' : '#4963d1',
    paddingHorizontal: isFocused ? 6 : 0,
    backgroundColor: 'white',
    overflow: 'hidden',
    alignSelf: 'flex-start',
    zIndex: 9999,
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{padding: 20}}>
        <Text style={labelStyle}>{isFocused ? 'name' : ''}</Text>
        <TextInput
          value={name}
          onChangeText={value => setName(value)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          blurOnSubmit
          placeholder={isFocused ? '' : 'name'}
          style={{
            fontSize: 16,
            color: '#000',
            borderWidth: 1,
            width: 200,
            paddingLeft: moderateScale(18),
            borderColor: '#a4b1e8',
          }}
        />
 
      </View>
      <TouchableOpacity style={style.Signout}>
        <Text onPress={()=>{navigation.navigate('Carouseldesign')}} style={style.signout}>
          SignOut
        </Text>
      </TouchableOpacity>
    </View>
  );
};
const style=StyleSheet.create({
  Signout: {
    alignItems: 'center',
    marginTop: moderateScale(23),
    backgroundColor: 'green',
    height: 50,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  signout: {
    color: 'white',
    fontSize: 18,
  },
})
export default TextField;
