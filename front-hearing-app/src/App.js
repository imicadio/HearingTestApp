import React from 'react';
import { Route } from 'react-router-dom';

import logo from './logo.svg';
import classes from './App.css';
import Header from './components/Header/Header';

const App = props => {
  return (
    <React.Fragment>
      <Header />
      <main>
        <Route path="/" component={} exact />
      </main>
    </React.Fragment>
  );
}

export default App;
