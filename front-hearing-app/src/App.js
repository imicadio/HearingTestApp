import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.css';
import Header from './components/Header/Header';
import Home from './containers/Home/Home'
import NotFound from './containers/Not-Found/Not-Found';
import SetupInstructions from './containers/Setup-Instructions/Setup-Instructions';
import Sounds from './containers/Sounds/Sounds';

const routes = (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/setup-instructions" component={SetupInstructions} />
    <Route path="/measurement/:id" component={Sounds} />
    <Route component={NotFound} />
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
