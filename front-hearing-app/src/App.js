import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import logo from './logo.svg';
import classes from './App.css';
import Header from './components/Header/Header';
import Home from './containers/Homepage/Home';

const routes = (
  <Switch>
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
);

const App = props => {
  return (
    <React.Fragment>
      <Header />
      <main>
        {routes}
      </main>
    </React.Fragment>
  );
}

export default App;
