/**
 * Login Container
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import AuthenticateRender from './AuthenticateView';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  login: UserActions.login,
  getMyName: UserActions.getMyName,
  setUserData: UserActions.setUserData,
  setWalter: UserActions.setWalter
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthenticateRender);
