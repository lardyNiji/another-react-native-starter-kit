// uncomment this line for debugging with Reactotron
// import './ReactotronConfig';

import App from './src/App';
import AppConfig from './src/app/app.config';
import { AppRegistry } from 'react-native';

AppRegistry.registerComponent(AppConfig.appName, () => App);

