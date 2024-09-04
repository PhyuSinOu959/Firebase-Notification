/**
 * @format
 */
import messaging from '@react-native-firebase/messaging';
import { AppRegistry } from 'react-native';
import App from './src/index';
import { name as appName } from './app.json';

messaging().setBackgroundMessageHandler(async remoteMessage => {
});

AppRegistry.registerComponent(appName, () => App);
