import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { updateUser } from '../../redux/reducers/register';
import RegisterForm from './forms/RegisterForm'

class Register extends Component {
  constructor(props) {
    super(props)
  }

  handleSignUp = (data) => {
    this.props.updateUser(data);
    this.props.navigation.navigate('PersonalInfoRegScreen');
  }

  render() {
    const logo = require('../../assets/images/laburapp.png');
    return(
      <>
        <View style={styles.logoContiner}>
          <Image style={styles.logo}
            source={logo} />
        </View>
        <View style={styles.container}>
          <View style={{height:40}}/>
          <RegisterForm signUp={this.handleSignUp}/>
        </View>
        <View style={{ alignSelf:'center' }}>
          <View style={styles.normalContainer}>
            <Text style={styles.normalText}>Laburapp 1.0.0</Text>
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex:1,
  },
  label: {
    alignSelf: 'flex-start',
    marginLeft: 30,
    marginVertical: 5
  },
  logo: {
    alignSelf: 'center',
    width:300,
    height:60,
    resizeMode:'contain',
  },
  forgotPassword: {
    flexDirection: 'column',
    justifyContent: 'flex-end',
    height:30,
    alignItems: 'flex-end',
  },
  createAccount: {
    height:30,
  },
  normalContainer: {
    height:20,
  },
  normalText: {
    color:'#5B5A5A',
    fontSize:12,
    alignItems: 'center',
    textAlign:'center',
    width:330,
  },
  createText: {
    color:'#FF7260',
    fontSize:12,
    alignItems: 'center',
    textAlign:'center',
    width:330,
  },
  forgotText: {
    color:'#5B5A5A',
    fontSize:12,
    alignItems: 'flex-end',
    textAlign:'right',
    width:330,
  },
  logoContiner: {
    height:150,
    flexDirection: 'column',
    justifyContent: 'flex-end',
  },
  welcome: {
    fontSize:25,
    color:'#5B5A5A',
    letterSpacing:6
  },
  textInput: {
    color:'#989899',
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize:14,
  },
  button: {
    width:325,
    borderColor: '#129793',
    borderWidth: 1,
    height:50,
    padding:10,
    borderRadius:24,
    marginTop:35,
    backgroundColor:'#129793',
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
    color:'white',
    fontSize:12
  },
  emailContainer: {
    width:325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height:50,
    padding:10,
    borderRadius: 4,
    backgroundColor:'#F5F6F7',
    marginBottom: 15,
  },
  passwordContainer: {
    width:325,
    borderColor: '#CFD0D1',
    borderWidth: 1,
    height:50,
    padding:10,
    borderRadius: 4,
    backgroundColor:'#F5F6F7',
    marginBottom: 15,
  }

});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      updateUser
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Register);
