/**
 * Launch Screen
 *  - Shows a nice loading screen whilst:
 *  - Checking if user is logged in, and redirects from there
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StatusBar,
  StyleSheet,
  ActivityIndicator,
  Text,
  Dimensions,
  Button,
  Alert,
} from 'react-native';

import AppIntro from 'react-native-app-intro';
// Consts and Libs

/* Styles ==================================================================== */

const { width, height } = Dimensions.get('window');
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;

var StatusBarAndroid = require('react-native-android-statusbar');
/* Component ==================================================================== */
class Presentation extends Component {
  static componentName = 'Presentation';
  static navigatorStyle = {
    drawUnderNavBar: false,
    drawUnderTabBar: false,
    navBarTranslucent: true,
    navBarHidden: true,
    tabBarHidden: true,
    statusBarHideWithNavBar: true,
    statusBarHidden: true,
    navBarBlur:true,
    statusBarColor: '#000FFF',
    navBarHideOnScroll: true
  };



  static propTypes = {
    //login: PropTypes.func.isRequired

  }
  constructor(props) {
      super(props);
      //StatusBar.setHidden(false, true);
      //StatusBarAndroid.hideStatusBar();
      //this.props.navigator.toggleNavBar('hidden');

    }

  componentDidMount = () => {


  }
  switchToTab = () => {
      this.props.navigator.switchToTab({
          tabIndex: 1,
      });
  };

  render = () => (
    <View >
      <AppIntro
      showSkipButton={false}
      showDoneButton={false}>
      <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <View level={5}>
              <Image style={styles.image} source={require('../../assets/intro/1.jpg')} />
            </View>
          <View style={styles.info}>
              <View level={20}><Text style={styles.title}>Corridas para meninos</Text></View>
              <View level={10}><Text style={styles.description}>é em Matosinhos</Text></View>
            </View>

        </View>
      <View style={[styles.slide, { backgroundColor: '#fa931d' }]}>
          <View level={5}>
              <Image style={styles.image} source={require('../../assets/intro/2.jpg')} />
            </View>
          <View style={styles.info}>
              <View level={20}><Text style={styles.title}>i'm the one </Text></View>
              <View level={10}><Text style={styles.description}>who knocks</Text></View>
            </View>
        </View>

    </AppIntro>
      <View style={styles.btView} level={50}>
        <Button title="CLICA AQUI" onPress={this.switchToTab}  />
      </View>
    </View>

  );
}


const styles = StyleSheet.create({
  slide: {
    flex: 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9DD6EB',
    padding: 0,
  },
  header: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  image: {
    resizeMode: 'contain',
    flex: 1,
  },
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  info: {
    flex: 1,
    alignItems: 'flex-start',
    padding: 30,
    position: 'absolute',
    width: windowsWidth,
    bottom: 100,
  },
  title: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'left',

  },
  description: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  btView: {
    position: 'absolute',
    right: 10,
    bottom: 10,
  },


});

/* Export Component ==================================================================== */
export default Presentation;
