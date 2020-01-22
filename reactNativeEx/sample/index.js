/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
//import Accounts from './Accounts'
import SbiLogin from './SbiLogin'
import {name as appName} from './app.json';
//import ApiExample from 'ApiExample'
//AppRegistry.registerComponent(appName, () => Accounts);
//AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => SbiLogin);
//AppRegistry.registerComponent(appName, () => ApiExample);