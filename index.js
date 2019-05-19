/**
 * @format
 */

import React, {Component} from 'react'
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import { CosmosNativeLoader } from 'react-cosmos-loader/native';
import { rendererConfig, fixtures } from './cosmos.userdeps.js';

class Cosmos extends Component {
  render() {
    return <CosmosNativeLoader options={rendererConfig} modules={fixtures} />;
  }
}

AppRegistry.registerComponent(appName, () => Cosmos);
