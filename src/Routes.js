import React, { Component} from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="login" component={FormLogin} title="Login" initial={true} />
    <Scene key="register" component={FormCadastro} title="Register" initial={false} />
  </Scene>
);

class App extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}