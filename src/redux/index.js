import { combineReducers } from 'redux';

// Our custom reducers

import router from '@redux/router/reducer';
import sideMenu from '@redux/sidemenu/reducer';
import user from '@redux/user/reducer';
//import recipe from '@redux/recipes/reducer';

// Combine all
const appReducer = combineReducers({
  router,
  sideMenu,
  user

});

// Setup root reducer
const rootReducer = (state, action) => {
  const newState = (action.type === 'RESET') ? undefined : state;
  return appReducer(newState, action);
};

export default rootReducer;
