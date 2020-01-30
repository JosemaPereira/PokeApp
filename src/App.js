import React from 'react';
import './App.css';
import { Home } from './components/home';
import { Detail } from './components/detail';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useRouteMatch
} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/'>
          <Home></Home>
        </Route>
        <Route path='/pokemon'>
          <Detail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
