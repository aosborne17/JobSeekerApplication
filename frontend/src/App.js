import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import './App.css';
import Landing from './components/Landing';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path='/register' component={Register} />
        <Route exact path='/login' component={Login} />
        <div className='app'>
          <Header />
          <div className='app__body'>
            {/* add toggle */}
            <Route exact path='/' component={Landing} />
            <Route exact path='/home' component={Home} />
          </div>
        </div>
      </Switch>
    </Router>
  );
};

export default App;
