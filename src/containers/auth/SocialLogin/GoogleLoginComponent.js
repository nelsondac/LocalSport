import React, { Component, PropTypes } from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text
} from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin';
 
class GoogleLogin extends Component {
  static componentName = 'GoogleLogin';
    constructor(props) {
        super(props);
    }
    
    componentDidMount() {   
        this._setupGoogleSignin();
    }

    async _setupGoogleSignin() {
        try 
        {     
            await GoogleSignin.hasPlayServices({ autoResolve: true });
            await GoogleSignin.configure({
                webClientId: '226542701630-d8g0sgs7921sfg4h4e7onfu5nvi3mg2v.apps.googleusercontent.com',
                offlineAccess: false
            });
            const user = await GoogleSignin.currentUserAsync();
        }
        catch(err) 
        {      
            console.log("Play services error", err.code, err.message);
        }
    }


    render = () => (
        <GoogleSigninButton
                    style={{width: 48, height: 48}}
                    size={GoogleSigninButton.Size.Icon}
                    color={GoogleSigninButton.Color.Dark}
                    onPress={this._googleSignIn.bind(this)}/>
    )

     _googleSignIn() {
        GoogleSignin.signIn()
        .then((user) => {
          console.log(user);
          const newData = {"userName": "G " + user.name};
          this.props.setUserData(newData);
        // this.setState({user: user});
        })
        .catch((err) => {
            alert( err);
      
          console.log('WRONG SIGNIN', err);
        })
        .done();
      }
}

export default GoogleLogin;
