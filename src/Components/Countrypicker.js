import {View, Text, TextInput, StyleSheet} from 'react-native';
import React from 'react';
import CountryPicker from 'react-native-country-picker-modal';
import {moderateScale} from 'react-native-size-matters';
function Countrypicker({
  value,
  onchangeText = () => {},
  countryFlag = '',
  CountryCode='IN',
  onSelect,
  showInput = false,
  withCountryName = false,
  withCurrencyButton = false,
  placeholder = '',
}) {
  return (
    <View style={style.maindiv}>
      <View style={style.countryview}>
        <CountryPicker
          onSelect={onSelect}
          visible={false}
          countryCode={CountryCode}
          withCallingCode={true}
          withEmoji={true}
          withFilter={true}
          withCurrencyButton={withCurrencyButton}
          withCountryName={withCountryName}>
            
          </CountryPicker>
      </View>
      {showInput && (
        <View style={{marginLeft: moderateScale(16), justifyContent: 'center'}}>
          <TextInput
            style={style.textinputstyle}
            onChangeText={onchangeText}
            keyboardType="phone-pad"
            value={value}
            placeholder={placeholder}
            placeholderTextColor="grey"></TextInput>
        </View>
      )}
    </View>
  );
}
const style = StyleSheet.create({
  maindiv: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  countryview: {
    justifyContent: 'center',
  },
  textinputstyle: {
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
    width: 170,
  },
});

export default Countrypicker;
