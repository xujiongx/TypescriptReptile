import React from 'react';
import './App.css';
import { HashRouter, Switch, Route } from 'react-router-dom';
import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <div className='App'>
      <HashRouter>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route exact path='/login' component={Login}></Route>
        </Switch>
      </HashRouter>
    </div>
  );
};

export default App;
