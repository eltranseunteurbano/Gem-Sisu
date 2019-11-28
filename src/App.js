import React from 'react';
import './styles/reset.scss';
import './styles/styles.scss';

import { BrowserRouter as Router, Switch } from "react-router-dom";
import * as routes from './constants/Routes';

import Producto from './containers/Producto/Producto';

import Home from './containers/Home/Home';
import Store from './containers/Store/Store';
import About from './containers/About/About';
import Contacto from './containers/Contacto/Contacto';
import Carro from './containers/Carro/Carro';
import Register from './containers/Register/Register';
import Login from './containers/Login/Login';
import { isUserAuthenticated } from './services/firebaseService';
import RedirectRoute, { PRIVATE_ROUTE_TYPE, PUBLIC_ROUTE_TYPE } from './components/RedirectRoute/RedirectRoute';
import Comments from './containers/Comments/Comments';

const App = (props) => {

  return (
    <div className="App">
      <Router>
        <Switch>
          <RedirectRoute exact isAuthenticated={true} type={PUBLIC_ROUTE_TYPE} component={Login} path={routes.LOGIN} />
          <RedirectRoute exact isAuthenticated={true} type={PUBLIC_ROUTE_TYPE} component={Register} path={routes.REGISTER} />
          <RedirectRoute exact isAuthenticated={isUserAuthenticated()} type={PRIVATE_ROUTE_TYPE} component={Home} path={routes.HOME} />
          <RedirectRoute exact isAuthenticated={isUserAuthenticated()} type={PRIVATE_ROUTE_TYPE} component={About} path={routes.ABOUT} />
          <RedirectRoute exact isAuthenticated={isUserAuthenticated()} type={PRIVATE_ROUTE_TYPE} component={Contacto} path={routes.CONTACT} />
          <RedirectRoute exact isAuthenticated={isUserAuthenticated()} type={PRIVATE_ROUTE_TYPE} component={Store} path={routes.STORE} />
          <RedirectRoute exact isAuthenticated={isUserAuthenticated()} type={PRIVATE_ROUTE_TYPE} component={Carro} path={routes.CARRO} />
          <RedirectRoute exact isAuthenticated={isUserAuthenticated()} type={PRIVATE_ROUTE_TYPE} component={Producto} path={routes.STORE + '/:id'} />
          <RedirectRoute exact isAuthenticated={isUserAuthenticated()} type={PRIVATE_ROUTE_TYPE} component={Comments} path={routes.COMMENTS} />

        </Switch>
      </Router>
    </div>
  );
}

export default App;
