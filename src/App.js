import React from 'react';
import LandingPage from './components/LandingPage';
import { Route, Switch, withRouter } from 'react-router-dom'
import Signin from './components/Signin';
import Signup from './components/Signup';
import Showpage from './components/Showpage';
import Home from './components/Home';
import DataFetchContextProvider from './components/contexts/DataFetchContext'
import UserContextProvider from './components/contexts/UserContext';
import CommentContextProvider from './components/contexts/CommentContext';

function App() {
  return (
    <Switch>
      <Route exact path='/' component={LandingPage} />
      <DataFetchContextProvider>
        <UserContextProvider>
          <Route exact path='/signin' component={Signin} />
          <Route exact path='/signup' component={Signup} />
          <Route exact path='/home' component={Home} />
          <CommentContextProvider>
            <Route exact path='/movie/:id' render={(props) => <Showpage {...props} />} />
          </CommentContextProvider>
        </UserContextProvider>
      </DataFetchContextProvider>
    </Switch>
  );
}

export default withRouter(App);