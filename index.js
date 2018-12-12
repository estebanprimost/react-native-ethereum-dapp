/** @format */

import './src/lib/global';

import { AppRegistry } from 'react-native';
import App from './src/App';
import { name as appName } from './src/app.json';

AppRegistry.registerComponent(appName, () => App);
