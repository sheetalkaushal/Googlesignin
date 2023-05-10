import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDF5FE',
  },
  arrow: {
    marginTop: 27,
    marginLeft: 23,
  },
  account: {
    textAlign: 'center',
    paddingTop: moderateScale(67),
    color: 'brown',
    fontSize: 23,
    fontWeight: '600',
  },
  number: {
    textAlign: 'center',
    paddingTop: moderateScale(20),
    fontSize: 19,
    color: 'green',
    fontWeight: '500',
  },
  send: {
    alignSelf: 'center',
    marginTop: moderateScale(69),
    backgroundColor: 'green',
    width: '30%',
    height: 50,
    borderRadius: 30,
    justifyContent: 'center',
  },
  sendotp: {
    textAlign: 'center',
    fontSize: 15,
    color: 'white',
    fontWeight: '500',
  },
  otpinput: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: moderateScale(67),
  },
  input: {
    borderBottomColor: 'orange',
    borderBottomWidth: 1,
    width: 170,
    alignSelf: 'center',
  },
  receive: {
    color: 'grey',
    textAlign: 'center',
  },
  resend: {
    color: 'orange',
  },
  receivecode: {
    marginTop: moderateScale(34),
  },
  // phonenumber:{
    
  // }
});
