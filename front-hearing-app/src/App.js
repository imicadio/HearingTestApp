import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.css';
import Header from './components/Header/Header';
import Home from './containers/Home/Home'

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

const App = props => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.container}>
        {routes}
      </main>
    </React.Fragment>
  );
}

export default App;
