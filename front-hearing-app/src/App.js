import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.css';
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';

const routes = (
  <Switch>
    <Route path="/contact" component={Contact} />
    <Route path="/" exact component={Home} />
    <Redirect to="/" />
  </Switch>
);

const App = props => {
  return (
    <React.Fragment>
      <Header />
      <main className={classes.Container}>
        {routes}
      </main>
    </React.Fragment>
  );
}

export default App;
