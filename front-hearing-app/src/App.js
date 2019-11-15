import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import classes from './App.css';
import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import Contact from './containers/Contact/Contact';
import SetupInstruction from './containers/Setup-Instruction/Setup-Instruction';
import Test from './containers/Test/Test';
import TestChild from './containers/Test/Test-Child/Test-Child';

const routes = (
  <Switch>
    <Route exact path="/setupInstructions" component={SetupInstruction} />
    <Route exact path="/test" component={Test} />
    <Route exact path="/test/:id" component={TestChild} />
    <Route exact path="/contact" component={Contact} />
    <Route exact path="/" component={Home} />
    <Redirect to="/" />
  </Switch>
);

const App = props => {
  return (
    <React.Fragment>
      <Navigation />
      <main className={classes.Container}>
        {routes}
      </main>
    </React.Fragment>
  );
}

export default App;
