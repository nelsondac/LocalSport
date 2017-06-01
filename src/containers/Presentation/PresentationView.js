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
import { Actions } from 'react-native-router-flux';

// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

/* Styles ==================================================================== */

const { width, height } = Dimensions.get('window');
const windowsWidth = Dimensions.get('window').width;
const windowsHeight = Dimensions.get('window').height;
/* Component ==================================================================== */
class Presentation extends Component {
  static componentName = 'Presentation';

  static propTypes = {
    login: PropTypes.func.isRequired

  }


  componentDidMount = () => {
    StatusBar.setHidden(false, true);
  }


  render = () => (
    <View style={[AppStyles.container]} >
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
        <Button title="CLICA AQUI" onPress={Actions.authenticate} />
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
