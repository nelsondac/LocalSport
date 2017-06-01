import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';

import FBSDK, {
  LoginButton,
  AccessToken,
  LoginManager,
  GraphRequest,
  GraphRequestManager,
} from  'react-native-fbsdk';


class FacebookLogin extends Component {
    static componentName = 'FacebookLogin';
    constructor(props) {
        super(props);
    }

    static propTypes = {
        onLoginSuccess: PropTypes.func.isRequired,
        login: PropTypes.func.isRequired
    }

     componentDidMount() {   
        this._updateFacebookInfo.bind(this);
        this._updateFacebookInfo();
       
    }


    render = () => (
        <View>
            <LoginButton
                publishPermissions={["publish_actions"]}
                onLoginFinished={ this._loginFacebook }
                onLogoutFinished={() => console.log("logoutc.")}/>         
        </View>
    )

     _loginFacebook = (error, result) =>  {         
         console.log("_loginFacebook");        
        this._updateFacebookInfo();
        
        if (error) {
            alert("login has error: " + result.error);
        } 
        else if (result.isCancelled) {
            alert("login is cancelled.");
        } 
        else {
            AccessToken.getCurrentAccessToken().then(
                (data) => {
                //alert(data.accessToken.toString())
                }
            )
        }
    }

    _logFacebook = () => {
        console.log("LOG FACEBOOK");
    } 

    _updateFacebookInfo = () => {
        const infoRequest = new GraphRequest(
        '/me',
        {             
            parameters: {
                fields: {
                    string: 'email,first_name,name,last_name,picture'
                }
            }
        },
        this._responseInfoCallback.bind(this));
        new GraphRequestManager().addRequest(infoRequest).start();
    }
    
    _responseInfoCallback = (error: ?Object, result: ?Object) => {
       
        if (error) 
        {
            //alert('Error fetching data: ' + error.toString());
        } 
        else 
        {
            const newData = {"userName": "F " + result.name};
            this.props.setUserData(newData);
            this.props.onLoginSuccess();
            return result;
        }
      //resolve(result);
    }
}

export default FacebookLogin;
