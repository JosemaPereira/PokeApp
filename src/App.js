import React from 'react';
import { HomeContainer } from './containers/home';
import { DetailContainer } from './containers/detail';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { configureStore } from './configureStore';
import { Provider } from 'react-redux';
import { history } from './history';
const store = configureStore({}, history);

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomeContainer></HomeContainer>
          </Route>
          <Route path='/pokemon'>
            <DetailContainer />
          </Route>
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
