import React, {Fragment} from 'react';
import Login from './components/login';
import Navbar from './components/navbar'
import Landing from './components/landing';
import Register from './components/register';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';

import './App.css';

function App() {
  return (
    <Router>
      <Fragment>
      <Navbar/>
        <Route exact path="/" component={Landing} />
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </Switch>
      </Fragment>
    </Router>
  );
}

export default App;
