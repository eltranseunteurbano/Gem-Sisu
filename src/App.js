import React from 'react';
import './styles/reset.scss';
import './styles/styles.scss';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import * as routes from './constants/Routes';

import Nav from './components/Nav/Nav';
import Menu from './components/menu/Menu';
import Producto from './containers/Producto/Producto';

import Home from './containers/home/Home';
import Store from './containers/Store/Store';
import About from './containers/About/About';
import Contacto from './containers/contacto/Contacto';
import Carro from './containers/Carro/Carro';


const App = () => {
  
  const [ showMenu, setShowMenu ] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <Nav showMenu={showMenu} setMenu={setShowMenu}/>
        <Menu showMenu={showMenu} setMenu={setShowMenu}/>
        <Switch>
          <Route exact path={routes.HOME} > < Home /> </Route>
          <Route exact path={routes.STORE} > < Store /> </Route>
          <Route exact path={routes.STORE + '/:id' } > < Producto /> </Route>
          <Route exact path={routes.ABOUT} > < About /> </Route>
          <Route exact path={routes.CONTACT} > < Contacto /> </Route>
          <Route exact path={routes.CARRO} > < Carro /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
