import Api from '../../utils/api';
import AppConfig from '../../app/app.config';
import { ActionConst, Actions } from 'react-native-router-flux';
import { AsyncStorage } from 'react-native';

/**
 * User Actions
 */

export function login(formData = {}) {
  console.log('User Actions : login formData :', formData);

  // Reassign variables for eslint ;)
  const email = formData.email || '';
  const password = formData.password || '';

  return async dispatch => dispatch({
    type: 'USER_LOGIN',
    data: {
      email,
      password,
    },
  });
}

export function getUserInfos() {
  return (dispatch) => {
    dispatch({
      type: 'SERVICE_PENDING',
    });
    console.log('User Actions : getUserInfos...');

    setTimeout(() => {
      dispatch({
        type: 'USER_LOGGED_IN',
      });
    }, 2000);
  };
}

export function logout() {
  console.log('User Actions logout : clearing AsyncStorage...');
  AsyncStorage.clear(() => {
    console.log('User Actions logout : going to intro scene...');
    Actions.intro({ type: ActionConst.RESET });
    console.log('User Actions logout : dispatching USER_LOGGED_OUT...');
  });
  return (dispatch => dispatch({ type: 'USER_LOGGED_OUT' }));
}
