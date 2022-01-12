import './styles.css';

import { createMemoryHistory } from 'history';
import React from 'react';
import ReactDOM from 'react-dom';
import { Route, Router, Switch } from 'react-router-dom';

import HomePage from './pages/HomePage';
import SelectSourcePage from './pages/SelectSourcePage';
import SelectTablePage from './pages/SelectTablePage';
import RootComponent from './RootComponent';

const history = createMemoryHistory();

ReactDOM.render(
  <RootComponent>
    <Router history={history}>
      <Switch>
        <Route exact path='/'>
          <HomePage />
        </Route>
        <Route path='/sources'>
          <SelectSourcePage />
        </Route>
        <Route
          path='/source-tables/:id'
          render={(props) => <SelectTablePage key={props.match.params.id} />}
        ></Route>
      </Switch>
    </Router>
  </RootComponent>,
  document.querySelector('#root')
);
