/**
 * @format
 */

import {AppRegistry} from 'react-native';
import 'react-native-gesture-handler';

import Navigation from './src/navigation/navigator'
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => Navigation);
