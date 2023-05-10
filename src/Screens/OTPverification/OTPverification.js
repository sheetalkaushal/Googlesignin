import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {style} from './OTPverifyStyle';
import auth from '@react-native-firebase/auth';
import imagePath from '../../constants/imagePath';
import Countrypicker from '../../Components/Countrypicker';
import Verify from '../Verify/Verify';

const OTPverification = ({navigation}) => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [countryFlag, setCountryFlag] = useState('');
  const [confrim, setConfrim] = useState(null);
  const [displayOTPInput, setDisplayOTPInput] = useState(false);

  function onAuthStateChanged(user) {
    console.log(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const phonNumberValidation = val => {
    if (val.match('^[0-9]*$')) {
      setPhoneNumber(val);
    }
  };
  // main otp action
  const requestOTP = async () => {
    setDisplayOTPInput(true);
    const confirmation = await auth().signInWithPhoneNumber(
      '+91' + phoneNumber,
    );
    console.log(confirmation, 'confirm');
    setConfrim(confirmation);
  };
  const getPhoneNumber = () => {
    if (phoneNumber == '') {
      alert('Enter a mobile number');
    } else {
      requestOTP();
      navigation.navigate(Verify, {confrim});
    }
  };

  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={style.arrow} source={imagePath.icarrow} />
      </TouchableOpacity>
      <TouchableOpacity style={style.loginnext}>
        <Text onPress={() => navigation.navigate('Verify')} style={style.next}>
          NEXT
        </Text>
      </TouchableOpacity>
      <Text style={style.account}>Create Account</Text>
      <View>
        <Text style={style.number}>
          Enter your mobile number to create account
        </Text>
        <Countrypicker
          value={phoneNumber}
          onchangeText={phonNumberValidation}
          showInput={true}
          countryFlag={countryFlag}
          countryCode={countryCode}
          onSelect={country => {
            setCountryCode(country.cca2);
            setCountryFlag(country.callingCode[0]);
            // onSelect={(country) =>setCountryFlag(country)}
          }}
        />
        <TouchableOpacity onPress={() => getPhoneNumber()} style={style.send}>
          <Text style={style.sendotp}>SEND</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default OTPverification;
