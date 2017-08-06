/*
import React from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import Routes from './Routes';
import reducers from './reducers';

export default props => (
    <Provider store={createStore(reducers)}>
        <Routes />
    </Provider>
);
*/

import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './PageOne';
import PageTwo from './PageTwo';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={true} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}