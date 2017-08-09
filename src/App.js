/*import React, { Component }  from 'react';
import { Router, Scene } from 'react-native-router-flux';

import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default class App4 extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="formLogin" component={FormLogin} title="FormLogin" initial={true} />
          <Scene key="formCadastro" component={FormCadastro} title="FormCadastro" />
        </Scene>
      </Router>
    )
  }
}
*/
import React, { Component } from 'react';
import { Router, Scene } from 'react-native-router-flux';

import PageOne from './PageOne';
import PageTwo from './PageTwo';
import Routes from './Routes';
import FormLogin from './components/FormLogin';
import FormCadastro from './components/FormCadastro';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="formCadastro" component={FormCadastro} title="Form Cadastro" initial={true} />
          <Scene key="pageOne" component={PageOne} title="PageOne" initial={false} />
          <Scene key="pageTwo" component={PageTwo} title="PageTwo" />
        </Scene>
      </Router>
    )
  }
}