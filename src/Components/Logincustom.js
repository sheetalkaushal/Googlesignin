import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';

const Logincustom = ({
  placeholder,
  keyboard,
  hide,
  Show,
  onPress,
  maxlength,
  onChangeText,
  value
}) => {
  return (
    <View style={Style.container}>
      <TextInput
      onChangeText={onChangeText}
      value={value}
        style={Style.main}
        placeholder={placeholder}
        placeholderTextColor={'grey'}
        keyboardType={keyboard}
        secureTextEntry={hide}
        maxLength={maxlength}></TextInput>
      {Show ? (
        <TouchableOpacity onPress={onPress}>
          <Text style={Style.show}>{Show}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
};
export default Logincustom;
const Style = StyleSheet.create({
  container: {
    marginTop: moderateScale(34),
    backgroundColor: '#33FFF2',
    borderRadius: moderateScale(8),
    height: 50,
    width: 300,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',

    alignSelf: 'center',
  },
  main: {
    fontSize: 18,
    alignItems: 'center',
    marginLeft: 7,
  },
  show: {
    marginRight: 12,
    color: 'grey',
  },
});
