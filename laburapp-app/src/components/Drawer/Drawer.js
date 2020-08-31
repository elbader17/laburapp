import { createDrawerNavigator } from 'react-navigation-drawer';
import { createStackNavigator } from 'react-navigation-stack';
import { Dimensions } from 'react-native';
import Home from '../Home/Home';
import SideBar from '../SideBar/SideBar';
import React, { Component } from 'react';
import Header from '../common/Header';
import HeaderIcon from '../common/HeaderIcon';

const StackNavigator = createStackNavigator(
  {
    HomeScreen: {
      screen: Home,
      navigationOptions: {
        gesturesEnabled: true,
      }
    },
  },
  {
    initialRouteName: 'HomeScreen',
  }
)

const MenuNavigator = createDrawerNavigator(
  {
    Main: StackNavigator
  },
  {
    drawerWidth: Dimensions.get('window').width/2,
    drawerPosition: 'left',
    contentComponent: SideBar
  }
);

export default MenuNavigator;