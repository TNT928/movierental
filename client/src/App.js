import React, {Fragment, useEffect} from 'react';
import Login from './components/auth/login';
import Navbar from './components/navbar'
import Landing from './components/landing';
import Register from './components/auth/register';
import Dashboard from './components/dashboard/dashboard'
import PrivateRoute from './components/routing/privateRoute'
import Alert from './components/Alert'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux'
import store from './store'
import './App.css';
import {loadUser} from './actions/auth'
import setAuthToken from './utilties/setAuthToken'

if(localStorage.token){
  setAuthToken(localStorage.token  )

}

function App() {

  useEffect(() =>{
    store.dispatch(loadUser())
  }, [])

  return (
    <Provider store = {store}>
    <Router>
      <Fragment>
      <Navbar/>
        <Route exact path="/" component={Landing} />
        <Alert/>
        <Switch>
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
          
        </Switch>
      </Fragment>
    </Router>
    </Provider>
  );
}

export default App;
