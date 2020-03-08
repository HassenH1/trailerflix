import React from 'react';
import LandingPage from './components/LandingPage';
import { Route, Switch, withRouter } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Home from './components/Home';
import DataFetchContextProvider from './components/contexts/DataFetchContext'


function App() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/signin' component={Signin} />
      <Route exact path='/signup' component={Signup} />
      <DataFetchContextProvider>
        <Route exact path='/home' component={Home} />
      </DataFetchContextProvider>
    </Switch>
  );
}

export default withRouter(App);