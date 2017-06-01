/**
 * Authenticate Screen
 *  - Entry screen for all authentication
 *  - User can tap to login, forget password, signup...
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet
} from 'react-native';


import { Actions } from 'react-native-router-flux';
import { SocialIcon } from 'react-native-elements';

import FacebookLogin from './SocialLogin/FacebookLoginContainer';
import GoogleLogin from './SocialLogin/GoogleLoginComponent';



// Consts and Libs
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Spacer, Text, Button } from '@ui/';

import Icon from 'react-native-vector-icons/FontAwesome';

/* Styles ==================================================================== */
const styles = StyleSheet.create({
  background: {
    backgroundColor: 'transparent',
    height: AppSizes.screen.height,
    width: AppSizes.screen.width,
  },
  logo: {
    width: AppSizes.screen.width * 0.85,
    resizeMode: 'contain',
  },
  whiteText: {
    color: '#FFF',
  },
});

/* Component ==================================================================== */
class Authenticate extends Component {
  static componentName = 'Authenticate';
  
  static propTypes = {
    login: PropTypes.func.isRequired
  }

  constructor(props)  {
    super(props);    
    this.state = 
    {
      resultMsg: 
        {
          status: '',
          success: '',
          error: ''
        }
    };    
  }

  loginSucess() {
    //console.log("OK ");
    Actions.app();
  }

  render = () => (
    <Image
      source={require('../../assets/login.jpg')}
      style={[AppStyles.containerCentered, AppStyles.container, styles.background]}> 

      <Image source={require('../../images/logo.png')} style={[styles.logo]} />
      <Text p style={[AppStyles.textCenterAligned, styles.whiteText]}>
        {this.props.user.userName}
      </Text>
      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>        
        <View style={{flex: 1, flexDirection: "row"}}>
          <View style={{flex: 0.5}}>
             <FacebookLogin onLoginSuccess={() => this.loginSucess()} />                  
          </View>
          <View style={{flex: 0.5}}>
            <GoogleLogin />
          </View>
        </View>
       </View>
       <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex2]}>
          <Button
            title={'Login'} icon={{ name: 'lock' }} onPress={Actions.login}
          />     
      </View>
     </View>
      <Spacer size={10} />
      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex2]}>
          <Button
            title={'Sign up'}
            icon={{ name: 'face' }}
            onPress={Actions.authLanding}
          />
        </View>
      </View>

      <Spacer size={15} />

      <Text p style={[AppStyles.textCenterAligned, styles.whiteText]}>
        - or -
      </Text>

      <Spacer size={10} />

      <View style={[AppStyles.row, AppStyles.paddingHorizontal]}>
        <View style={[AppStyles.flex1]} />
        <View style={[AppStyles.flex2]}>
          <Button
            small
            title={'Skip'}
            onPress={Actions.app}
            backgroundColor={'#CB009E'}
            raised={false}
          />
          <Button
            small
            title={'Log User'}
            onPress={() => this.logUser()}
            backgroundColor={'#CB009E'}
            raised={false}
          />
        </View>
        <View style={[AppStyles.flex1]} />
      </View>

      <Spacer size={40} />
    </Image>
  )
}

/* Export Component ==================================================================== */
export default Authenticate;
