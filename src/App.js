import React from 'react';
import './styles/reset.scss';
import './styles/styles.scss';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import * as routes from './constants/Routes';

import Nav from './components/Nav/Nav';
import Home from './containers/home/Home';
import Menu from './components/menu/Menu';

const App = () => {
  
  const [ showMenu, setShowMenu ] = React.useState(false);

  return (
    <div className="App">
      <Router>
        <Nav showMenu={showMenu} setMenu={setShowMenu}/>
        <Menu showMenu={showMenu} />
        <Switch>
          <Route exact path={routes.HOME} > < Home menu={showMenu} /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
