/**

 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Platform
} from 'react-native';
/* INIT REDUX */
import { applyMiddleware, compose, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
/* //INIT REDUX */

import { Navigation } from 'react-native-navigation';
import registerScreens from './screens';

registerScreens();

const tabs = [
  {
      label: 'Navigation',
      screen: 'localSpot.presentation',
      icon: require('../img/list.png'),
      title: 'Navigation Types',
  },
  {
    label: 'Navigation',
    screen: 'example.Types',
    icon: require('../img/list.png'),
    title: 'Navigation Types',
}, {
    label: 'Actions',
    screen: 'example.Actions',
    icon: require('../img/swap.png'),
    title: 'Navigation Actions',
}];
/*if (Platform.OS === 'android') {
    tabs.push({
        label: 'Transitions',
        screen: 'example.Transitions',
        icon: require('../img/transform.png'),
        title: 'Navigation Transitions',
    });
}*/

Navigation.startTabBasedApp({
    tabs,
    tabsStyle: {
        tabBarBackgroundColor: '#003a66',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        navigationBarColor: '#003a66',
        navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'BioRhyme-Bold',
    },
    appStyle: {
        tabBarBackgroundColor: '#003a66',
        navBarButtonColor: '#ffffff',
        tabBarButtonColor: '#ffffff',
        navBarTextColor: '#ffffff',
        tabBarSelectedButtonColor: '#ff505c',
        navigationBarColor: '#003a66',
        navBarBackgroundColor: '#003a66',
        statusBarColor: '#002b4c',
        tabFontFamily: 'BioRhyme-Bold',
    },
    drawer: {
        left: {
            screen: 'example.Types.Drawer'
        }
    },

},{ headerMode: 'screen' } );
/*

export default function AppContainer() {
    return (
      <View>
        <Text>
          Welcome to React Native! from SRC
        </Text>

      </View>
    );
  }
*/
