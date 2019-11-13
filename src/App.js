import React from 'react';
import './styles/reset.scss';
import './styles/styles.scss';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import * as routes from './constants/Routes';

import Nav from './components/Nav/Nav';
import Home from './containers/home/Home';
import Contacto from './containers/contacto/Contacto';
import Menu from './components/menu/Menu';

const App = () => {
  
  const [ showMenu, setShowMenu ] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <Nav showMenu={showMenu} setMenu={setShowMenu}/>
        <Menu showMenu={showMenu} setMenu={setShowMenu}/>
        <Switch>
          <Route exact path={routes.HOME} > < Home /> </Route>
          <Route exact path={routes.CONTACT} > < Contacto /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
