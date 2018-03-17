import AppConfig from '../app/app.config';
import * as userActions from '../redux/actions/user-actions';
import { ActionConst, Actions } from 'react-native-router-flux';
import { Alert, AsyncStorage, InteractionManager } from 'react-native';
import { create as createApiSauceInstance } from 'apisauce/dist/apisauce';
import { translate } from '../i18n/i18n';

class Api {

  token = ''; // user auth token
  instance = null; // api sauce instance

  constructor() {
    this.log('in contructor');
  }

  getToken() {
    return new Promise((resolve, reject) => {
      if (this.token.length) {
        resolve(this.token);
        return;
      }
      this.log('getting token from async storage...');
      this.token = '';
      AsyncStorage.getItem('cbp:auth').then((authString) => {
        const auth = JSON.parse(authString);
        if (!auth || !auth.token) {
          this.log('found no token in async storage');
          reject(new Error('NO_STORED_TOKEN'));
        } else {
          this.token = auth.token;
          this.log('got token from async storage :', this.token);
          resolve(this.token);
        }
      });
    });
  }

  getInstance() {
    return new Promise((resolve, reject) => {
      if (this.instance) {
        resolve(this.instance);
        return;
      }
      this.log('creating api sauce instance...');
      this.getToken()
        .then((token) => {
          this.instance = createApiSauceInstance({
            baseURL: AppConfig.urls.apiBaseUrl,
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          resolve(this.instance);
        })
        .catch(error => reject(error));
    });
  }

  logout() {
    this.log('clearing token & api instance');
    this.token = '';
    this.instance = null;
    userActions.logout();
  }

  handleError(error) {
    this.log('handleError got', error.message);
    switch (error.message) {
      case 'NOT_AUTHENTICATED':
      case 'NO_STORED_TOKEN':
        this.log('not authenticated or no token');
        if (Actions.currentScene !== 'intro') {
          this.log('-> going back to intro');
          Actions.intro({ type: ActionConst.RESET });
        }
        break;
      case 'DISPLAYED_ERROR':
        this.log('error has been displayed by handleResponse, nothing to do in handleError');
        break;
      default:
        this.log('default case : error not handled');
    }
    this.log('propagate error message');
    return error.message;
  }

  handleResponse(response) {
    if (response.ok) {
      return response.data;
    } else if (response.status === 401) {
      this.logout();
      throw new Error('NOT_AUTHENTICATED');
    } else if (response.data.messageFront) {
      this.log('GET/POST returned an error with messageFront, displaying alert');
      InteractionManager.runAfterInteractions(() => {
        setTimeout(() => Alert.alert(translate('errors.error'), response.data.messageFront), 1);
      });
      throw new Error('DISPLAYED_ERROR');
    } else {
      this.log('GET/POST returned an error without messageFront, displaying no alert', response);
      throw new Error('UNHANDLED_ERROR');
    }
  }

  log(...args) {
    console.log('Api :', ...args);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  get(endpoint) {
    this.log(`GET "${endpoint}"...`);
    return this.getInstance()
      .then(instance => instance.get(endpoint))
      .then(response => this.handleResponse(response))
      .catch((error) => { throw this.handleError(error); });
  }

  post(endpoint, data, options) {
    return this.getInstance()
      .then(instance => instance.post(endpoint, data, options))
      .then(response => this.handleResponse(response))
      .catch((error) => { throw this.handleError(error); });
  }
}

const instance = new Api();

export default instance;
