

import jwtDecode from 'jwt-decode';

import AppAPI from '@lib/api';


export function login(credentials, freshLogin) {
  return dispatch => new Promise(async(resolve, reject) => {
    const userCreds = credentials || null;
    // Force logout, before logging in
    if (freshLogin && AppAPI.deleteToken) await AppAPI.deleteToken();

    if (!AppAPI.getToken) return resolve();

    // Get a new token from API
    return AppAPI.getToken(userCreds)
      .then((token) => {
        let decodedToken = '';

        try {
          decodedToken = jwtDecode(token);
        } catch (err) {
          return reject('Token decode failed.');
        }

        if (!decodedToken || !decodedToken.data ||
          !decodedToken.data.user || !decodedToken.data.user.id
        ) {
          return reject('Token decode failed.');
        }

        // Get user details from API, using my token
        return AppAPI.users.get(decodedToken.data.user.id)
          .then((userData) => {
            dispatch({
              type: 'USER_REPLACE',
              data: userData,
            });

            return resolve(userData);
          }).catch(err => reject(err));
      }).catch(err => reject(err));
  });
}

/**
 * Logout
 */
export function logout() {
  return dispatch => AppAPI.deleteToken()
    .then(() => {
      dispatch({
        type: 'USER_REPLACE',
        data: {},
      });
    });
}

/**
 * Get My User Data
 */
export function getMe() {
  return dispatch => AppAPI.me.get()
    .then((userData) => {
      dispatch({
        type: 'USER_REPLACE',
        data: userData,
      });

      return userData;
    });
}

export function setWalter() {
  return dispatch => {
    var userData = {
      "userName": "Walter"
    };
    dispatch({
      type: 'USER_REPLACE',
      data: userData,
    });
    return userData;
  };

}

export function getMyName() {
  return dispatch => {
    var userData = {};
    dispatch({
      type: 'GET_USER'
    }).then(function (res) {
      userData = res;
    });
    return userData;
  };
  //return  {type: 'USER_REPLACE', data:};
}

export function setUserData(newData) {
  return dispatch => {
    dispatch({
          type: 'USER_REPLACE',
          data: newData,
        });
    return newData;
  }
}

/**
 * Update My User Data
 * - Receives complete user data in return
 */
export function updateMe(payload) {
  return dispatch => AppAPI.me.post(payload)
    .then((userData) => {
      dispatch({
        type: 'USER_REPLACE',
        data: userData,
      });

      return userData;
    });
}
