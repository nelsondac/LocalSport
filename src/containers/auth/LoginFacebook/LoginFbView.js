
import React, { Component, PropTypes } from 'react';
import {
  ScrollView,
  AsyncStorage,
  TouchableOpacity,
  Image,
  StyleSheet,
  View
} from 'react-native';

import { Actions } from 'react-native-router-flux';

// Consts and Libs
import AppAPI from '@lib/api';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { Alerts, Card, Spacer, Text, Button } from '@ui/';

const FBSDK = require('react-native-fbsdk');
const {
  LoginButton,
  AccessToken,
  LoginManager
} = FBSDK;

/* Component ==================================================================== */
class LoginFb extends Component {
  static componentName = 'LoginFbView';

  static propTypes = {
    login: PropTypes.func.isRequired,
  }

  constructor(props) {
      super(props);
      this.state = {
        resultMsg: {
          status: '',
          success: '',
          error: '',
        }
    }
  }

  componentDidMount = () => {
    console.log("LOG DO STATE");
    this.props.setWalter();
    //console.log(this.state);
    //console.log();
  }


  render = () => {
    return (
        <View style={{flex:1, backgroundColor: 'transparent' }}>
          <View>
            <Text>Facebook</Text>
            <LoginButton
          publishPermissions={["publish_actions"]}
          onLoginFinished={
            (error, result) => {
              //console.log(error);
              if (error) {
                alert("login has error: " + result.error);
              } else if (result.isCancelled) {
                alert("login is cancelled.");
              } else {
                AccessToken.getCurrentAccessToken().then(
                  (data) => {
                    alert(data.accessToken.toString())
                  }
                )
              }
            }
          }
          onLogoutFinished={() => alert("logout.")}/>
          </View>
        </View>
    );
  }
}

export default LoginFb;
