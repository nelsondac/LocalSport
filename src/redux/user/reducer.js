/**
 * User Reducer
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */

// Set initial state

const initialState =  {userName: "No name user"};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case 'USER_REPLACE':          
      var userData = action.data;
      state = userData;
      return {...state};   
    case 'GET_USER':
      return {
        ...state
      };
    default:
      return state;
  }
}
