import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import firebase from "../utils/firebase"
import "firebase/auth"
import { sub } from 'react-native-reanimated';

export default class Login extends Component {

  constructor(props) {
    super(props);


    firebase.auth().onAuthStateChanged(user => {
      console.log(user)


    })

  };
  state = {
    mail: '',
    password: ''
  };

  submit = () => {
    firebase.auth().signInWithEmailAndPassword(this.state.mail,this.state.password)
  };


  render() {

    const signUp = () => this.props.navigation.navigate('RegisterScreen');
    const logo = require('../../assets/images/laburapp.png');





    return (

      <>
        <View style={styles.logoContiner}>
          <Image style={styles.logo}
            source={logo} />
        </View>
        <View style={styles.container}>
          <View style={{ height: 50 }} />
          <View style={styles.emailContainer}>
            <TextInput style={styles.textInput} placeholder="Email"
              keyboardType="email-address"
              onChangeText={(value) => this.setState({ mail: value })}
              value={this.state.mail}
            />
          </View>
          <View style={styles.passwordContainer}>
            <TextInput style={styles.textInput} placeholder="Password"
              secureTextEntry={true} onChangeText={(value) => this.setState({ password: value })}
              value={this.state.password} />
          </View>
          <TouchableOpacity>
            <View style={styles.forgotPassword}>
              <Text style={styles.forgotText}>Forgot password?</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={()=>this.submit()}>
            <View style={styles.button}>
              <Text style={styles.buttonText} >SIGN IN</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ alignSelf: 'center' }}>
          <View style={styles.normalContainer}>
            <Text style={styles.normalText}>Do not have account?</Text>
          </View>
          <TouchableOpacity onPress={() => signUp()}>
            <View style={styles.createAccount}>
              <Text style={styles.createText}>Create new account</Text>
            </View>
          </TouchableOpacity>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    paddingTop: 50
  },
  logo: {
    alignSelf: 'center',
    width: 300,
    height: 60,
    resizeMode: 'contain',
  },
  forgotPassword: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height: 30,
    alignItems: 'flex-end',
  },
  createAccount: {
    height: 30,
  },
  normalContainer: {
    height: 20,
  },
  normalText: {
    color: '#5B5A5A',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
  },
  createText: {
    color: '#FF7260',
    fontSize: 12,
    alignItems: 'center',
    textAlign: 'center',
    width: 330,
  },
  forgotText: {
    color: '#5B5A5A',
    fontSize: 12,
    alignItems: 'flex-end',
    textAlign: 'right',
    width: 330,
  },
  logoContiner: {
    height: 190,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize: 25,
    color: '#5B5A5A',
    letterSpacing: 6
  },
  textInput: {
    color: '#989899',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 14,
  },
  button: {
    width: 325,
    borderColor: '#129793',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderRadius: 24,
    marginTop: 35,
    backgroundColor: '#129793',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#129793',
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 5,
    shadowOpacity: 0.8
  },
  buttonText: {
    color: 'white',
    fontSize: 12
  },
  emailContainer: {
    width: 325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderBottomWidth: 0,
    backgroundColor: '#F5F6F7'
  },
  passwordContainer: {
    width: 325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height: 50,
    padding: 10,
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
    borderBottomLeftRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: '#F5F6F7'

  }

});
