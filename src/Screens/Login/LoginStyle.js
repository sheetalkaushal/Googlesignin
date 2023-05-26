import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#FDF5FE',
    backgroundColor:"red"
  },
  login: {
    textAlign: 'center',
    color: 'brown',
    fontSize: 23,
    marginTop: moderateScale(78),
  },
  userbtn: {
    marginTop: moderateScale(39),
  },
  nextlogin: {
    alignItems: 'center',
    marginTop: moderateScale(23),
    borderWidth: 1,
    borderColor: 'purple',
    height: 50,
    width: 200,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  loginbtn: {
    color: '#05445E',
    fontSize: 18,
    fontWeight: '600',
  },
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
  loginnext: {
    alignItems: 'flex-end',
    marginRight: 17,
  },
  next: {
    color: 'green',
    fontWeight: '700',
  },
});
