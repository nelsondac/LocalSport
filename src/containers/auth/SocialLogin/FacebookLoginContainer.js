
import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import FacebookRender from './FacebookLoginComponent';

// What data from the store shall we send to the component?
const mapStateToProps = state => ({
  user: state.user,
});

// Any actions to map to the component?
const mapDispatchToProps = {
  login: UserActions.login,
  getMyName: UserActions.getMyName,
  setUserData: UserActions.setUserData 
};

export default connect(mapStateToProps, mapDispatchToProps)(FacebookRender);
