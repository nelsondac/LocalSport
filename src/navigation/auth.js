/**
 * Auth Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene, ActionConst } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';

// Scenes
import Authenticate from '@containers/auth/AuthenticateContainer';
import AuthWebView from '@containers/auth/WebView';
import AuthLogin from '@containers/auth/Login/LoginContainer';
import AuthLoginFacebook from '@containers/auth/LoginFacebook/LoginFbContainer';

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'authenticate'}>
    <Scene
      hideNavBar
      key={'authLanding'}
      component={Authenticate}
      type={ActionConst.RESET}
      analyticsDesc={'Authenticate: Authentication'}
    />
    <Scene
     hideNavBar
      key={'login'}
      clone
      component={AuthLogin}
      analyticsDesc={'AuthLogin: Login'}
    />
    <Scene
     hideNavBar
      key={'loginFacebook'}
      clone
      component={AuthLoginFacebook}
      analyticsDesc={'AuthLogin: Login'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'signUp'}
      title={'Sign Up'}
      clone
      component={AuthWebView}
      url={AppConfig.urls.signUp}
      analyticsDesc={'AuthWebView: Sign Up'}
    />
    <Scene
      {...AppConfig.navbarProps}
      key={'passwordReset'}
      title={'Password Reset'}
      clone
      component={AuthWebView}
      url={AppConfig.urls.resetPassword}
      analyticsDesc={'AuthWebView: Password Reset'}
    />
  </Scene>
);

export default scenes;
