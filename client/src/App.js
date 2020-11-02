import React, {Fragment, useEffect, useState} from 'react';
import Login from './components/auth/login';
import Navbar from './components/navbar/navbar';
import Backdrop from './components/navbar/Backdrop/backdrop';
import SideDrawer from './components/navbar/sideDrawer';
import Landing from './components/landing';
import Register from './components/auth/register';
import Movie from './components/Movies/Movie'
import {Dashboard} from './components/dashboard/dashboard';
import PrivateRoute from './components/routing/privateRoute';
import Alert from './components/Alert';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import {Provider} from 'react-redux';
import store from './store';
import './App.css';
import {loadUser} from './actions/auth';
import setAuthToken from './utilties/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  const [toogle, setToggle] = useState(false);

  const onClick = () => setToggle((toggle) => !toggle);

  const backdropClick = ()=>{
    setToggle(false) 
  }

  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  
  let sideDrawer;
  let backdrop;

  if(toogle){
    sideDrawer = <SideDrawer/>
    backdrop = <Backdrop click = {backdropClick}/>
  }
  return (

    <Provider store={store}>
      <Router>
        <Fragment >
          <Navbar handleClick = {onClick}/>

         {sideDrawer}
         {backdrop}
          <Route exact path="/" component={Landing} />
          <Alert />
          <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <PrivateRoute exact path="/profile" component={Dashboard} />
            <PrivateRoute exact path="/movie/:id" component={Movie} />
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
