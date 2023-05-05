import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
export const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
    backgroundColor: 'brown',
    height: 50,
    width: 150,
    alignSelf: 'center',
    justifyContent: 'center',
    borderRadius: 20,
  },
  loginbtn: {
    color: 'white',
    fontSize: 18,
  },
  Signout:{
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
});
