import {View, Text, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import Logincustom from '../../Components/Logincustom';
import {style} from './LoginStyle';
import {Image} from 'react-native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import auth from '@react-native-firebase/auth';
const Login = ({navigation}) => {
  const [Email, SetEmail] = useState('');
  const [emails, Setemails] = useState('');
  const [passwords, Setpasswords] = useState('');
  const [Password, SetPassword] = useState('');
  const [enterpass, SetEnterPass] = useState(true);
  const [Hide, SetHide] = useState('Show');
  useEffect(() => {
    GoogleSignin.configure();
    // webClientid: "754684947402-klsssq207c2e67gg5ejeg3rvm7ub4coj.apps.googleusercontent.com",
  }, []);
  const Googlelogin = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userinfo', userInfo);
    } catch (error) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log(error);
        // user cancelled the login flow
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log(error);
        // operation (e.g. sign in) is in progress already
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log(error);
        // play services not available or outdated
      } else {
        console.log(error);
        // some other error happened
      }
    }
  };
  const SignOut = async () => {
    try {
      await GoogleSignin.signOut();
      // console.log(user,"user")
      console.log(SignOut);
      this.setUser({user: null});
    } catch (error) {
      console.log(error);
    }
  };
  const Emailsign = () => {
    auth()
      .createUserWithEmailAndPassword(emails, passwords)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });
  };
  function gotologin() {
    if (!Email.trim()) {
      alert('enter email');
    } else if (!Password.trim()) {
      alert('enter password');
    }
    navigation.navigate('Signup');
  }
  function password() {
    if (enterpass == true) {
      SetEnterPass(false);
      SetHide('show');
    } else if (enterpass == false) {
      SetEnterPass(true);
      SetHide('hide');
    }
  }
  return (
    <View style={style.container}>
      <Text style={style.login}>Login Google</Text>
      <TouchableOpacity style={style.loginnext}>
        <Text
          onPress={() =>
            navigation.navigate(
              'OTPverification',
              (gesturesDirection = 'inverted'),
            )
          }
          style={style.next}>
          NEXT
        </Text>
      </TouchableOpacity>
      <View style={style.userbtn}>
        <Logincustom
          placeholder="Email"
          value={emails}
          myfocus={() => navigation.navigate('OTPverification')}
          email={Email}
          onChangeText={val => Setemails(val)}
        />
      </View>
      <View>
        <Logincustom
          onPress={password}
          placeholder="Password"
          value={passwords}
          Show={Hide}
          hide={enterpass}
          onChangeText={val => Setpasswords(val)}
          maxlength={8}
        />
      </View>
      <TouchableOpacity style={style.nextlogin}>
        <Image
          style={{height: 20, width: 30}}
          source={{
            uri: 'https://1000logos.net/wp-content/uploads/2021/05/Gmail-logo.png',
          }}
        />
        <Text style={style.loginbtn} onPress={() => Emailsign()}>
          SignIn login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.nextlogin}>
        <Image
          style={{height: 20, width: 20}}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png',
          }}
        />
        <Text style={style.loginbtn} onPress={Googlelogin}>
          GoogleLogin
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={style.Signout}>
        <Text onPress={SignOut} style={style.signout}>
          SignOut
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;
