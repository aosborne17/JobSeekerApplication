import React from 'react';
import Header from './components/Header';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';

const App = () => {
  return (
    <Router>
      <div className='app'>
        <Header />
        <div className='app__body'>
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/' component={HomeScreen} />
          {/* <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/cart/:id?' component={CartScreen} /> */}
        </div>
      </div>
    </Router>
  );
};

export default App;
