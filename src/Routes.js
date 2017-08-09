import React, { Component } from 'react';
import { Actions, Scene, Router } from 'react-native-router-flux';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

const scenes = Actions.create(
  <Scene key="root">
    <Scene key="form_Cadastro" component={FormCadastro} title="Form_Cadastro"/>
    <Scene key="page_One" component={PageOne} title="Page_One" initial={false} />
    <Scene key="page_Two" component={PageTwo} title="Page_Two" initial={true}  />
  </Scene>
);

class App extends Component {
  render() {
    return <Router scenes={scenes}/>
  }
}
