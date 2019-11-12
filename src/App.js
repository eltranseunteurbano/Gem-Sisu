import React from 'react';
import './styles/reset.scss';

import { HashRouter as Router, Switch, Route } from "react-router-dom";
import * as routes from './constants/Routes';

import Nav from './components/Nav/Nav';
import Home from './containers/home/Home';

const App = () => {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route exact path={routes.HOME}> <Home /> </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
