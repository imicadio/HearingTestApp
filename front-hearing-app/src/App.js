import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.css';
import Header from './components/Header/Header';
import Home from './containers/Home/Home'
import SetupInstructions from './containers/Setup-Instructions/Setup-Instructions';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Setup-Instructions" component={SetupInstructions} />
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
