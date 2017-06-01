
import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import LoginFbRender from './LoginFbView';


const mapStateToProps = state => ({
  user: state.user
});


const mapDispatchToProps = {
  login: UserActions.login,
  getMyName: UserActions.getMyName,
  setWalter: UserActions.setWalter
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginFbRender);
