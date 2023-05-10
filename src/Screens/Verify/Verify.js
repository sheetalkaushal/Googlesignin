import {View, Text, TouchableOpacity, Image, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import {style} from './VerifyStyle';
import imagePath from '../../constants/imagePath';
import auth from '@react-native-firebase/auth';

const Verify = ({navigation, route}) => {
  console.log(route?.params,"route?.params")
  const [code, setCode] = useState('');
  const [counter, setCounter] = useState(59);
  function onAuthStateChanged(user) {
    // console.log(user)
  }
  const confirm = route?.params

  console.log(confirm, 'confirm>>>>>>>>>>>>><>>????');
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount

  }, []);
 
  const signIn = async () => {
    try {
      await confirm.confrim.confirm(code);  
      console.log('update>>>>', code);
    } catch (error) {
      console.log('Invalid code.', error);
    }
  };
  // {autoSubmitOtpTime > 0 &&
  //   autoSubmitOtpTime < AUTO_SUBMIT_OTP_TIME_LIMIT ? (
  //     <TimerText text={'Submitting OTP in'} time={autoSubmitOtpTime} />
  //   ) : null}
  //   const startAutoSubmitOtpTimer = () => {
  //     if (autoSubmitOtpTimerInterval) {
  //       clearInterval(autoSubmitOtpTimerInterval);
  //     }
  //     autoSubmitOtpTimerInterval = setInterval(() => {
  //       autoSubmitOtpTimerIntervalCallbackReference.current();
  //     }, 1000);
  //   };
  return (
    <View style={style.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image style={style.arrow} source={imagePath.icarrow} />
      </TouchableOpacity>
      <Text style={style.account}>Verify Account</Text>
      <View>
        <Text style={style.number}>
          Mobile verification has Succesfully done
        </Text>
      </View>
      <View style={style.otpinput}>
        <TextInput
          style={style.input}
          placeholder=""
          keyboardType="numeric"
          onChangeText={setCode}
          value={code}
          maxLength={10}></TextInput>
        {/* <TextInput
          style={style.input}
          placeholder=""
          keyboardType="numeric"
          maxLength={1}></TextInput>
        <TextInput
          style={style.input}
          placeholder=""
          keyboardType="numeric"
          maxLength={1}></TextInput>
        <TextInput
          style={style.input}
          placeholder=""
          keyboardType="numeric"
          maxLength={1}></TextInput> */}
      </View>
      <View style={style.receivecode}>
        <Text style={style.receive}>
          If you didn't receive a code
          <TouchableOpacity onPress={()=> startAutoSubmitOtpTimer ()}>
            <Text style={style.resend}> Resend</Text>
          </TouchableOpacity>
        </Text>
      </View>
      <TouchableOpacity onPress={() => signIn()} style={style.send}>
        <Text style={style.sendotp}>Verify</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Verify;
