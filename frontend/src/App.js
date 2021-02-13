import React from 'react';
import Header from './components/layouts/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import './App.css';
import Landing from './components/Landing';
import HomeScreen from './screens/HomeScreen';
import UserScreen from './screens/UserScreen';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/' component={Landing} />
        <div className='app'>
          <Header />
          <div className='app__body'>
            <Route exact path='/home'>
              <HomeScreen />
            </Route>
            <Route exact path='/:id'>
              <UserScreen />
            </Route>
          </div>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
