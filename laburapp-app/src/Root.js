import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createSwitchNavigators as Navigator } from './Navigation';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import Login from './components/Login/Login';
import Register from './components/Login/Register';
import PersonalInfoReg from './components/Login/PersonalInfoReg';
import AddressInfoReg from './components/Login/AddressInfoReg';
import SkillsInfoReg from './components/Login/SkillsInfoReg';
import ProfileImgReg from './components/Login/ProfileImgReg';
import Drawer from './components/Drawer/Drawer';

const loginNavigator = createStackNavigator ({
  LoginScreen: {
    screen: Login
  },
  RegisterScreen: {
    screen: Register
  },
  PersonalInfoRegScreen: {
    screen: PersonalInfoReg
  },
  AddressInfoRegScreen: {
    screen: AddressInfoReg
  },
  SkillsInfoRegScreen: {
    screen: SkillsInfoReg
  },
  ProfileImgRegScreen: {
    screen: ProfileImgReg
  },
},{
  initialRouteName: 'LoginScreen',
  headerMode: 'none'
});

const createSwitchNavigators = createSwitchNavigator ({
  LoginNavigatorScreen: {
    screen: loginNavigator
  },
  Drawer: {
    screen: Drawer
  },
},{
  // initialRouteName: true === false ? 'LoginNavigatorScreen' : 'Drawer',
  initialRouteName:'LoginNavigatorScreen',
  headerMode: 'none'
});

const mapStateToProps = store => {
  return store;
};

export default connect(mapStateToProps)(createAppContainer(createSwitchNavigators));
