import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

export const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FDF5FE',
    backgroundColor:"red"

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
    fontSize: 25,
    color: 'green',
    fontWeight: '500',
  },
  phoneNumberView: {
    backgroundColor: '#FDF5FE',
    alignSelf: 'center',
    fontSize: 15,
    textAlign: 'center',
    marginTop: moderateScale(34),
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
  textstyle: {
    width: '60%',
    backgroundColor: '#FDF5FE',
    borderBottomColor: 'grey',
    borderBottomWidth: 1,
  },
  loginnext: {
    alignItems: 'flex-end',
    marginRight: 17,
  },
  next: {
    color: 'green',
    fontWeight: '700',
  },
});
