import React, {Component} from 'react'
import {AppRegistry, NativeModules} from 'react-native'
import App from './App'
import {name as appName} from './app.json'

import { FixtureLoader, createWebSocketsConnect } from 'react-cosmos-fixture'
import { fixtures } from './cosmos.userdeps.js'

class Cosmos extends Component {
  render() {
    return <FixtureLoader
      rendererId="unique"
      rendererConnect={createWebSocketsConnect(getSocketUrl(5000))}
      fixtures={fixtures}
      systemDecorators={[]}
      userDecorators={[]}
      onFixtureChange={() => {}}
    />
  }
}

function getSocketUrl(port: number) {
  const url = NativeModules.SourceCode.scriptURL
  const { hostname: host } = url
  console.log(url)
  return `ws://localhost:5000`
}

AppRegistry.registerComponent(appName, () => Cosmos)
