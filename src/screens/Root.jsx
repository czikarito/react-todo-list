import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import ScreensTodoList from './Todo/List';
import ScreensTodoEdit from './Todo/Edit';
import ScreensTodoAdd from './Todo/Add';
import Header from '../components/shared/Header';

const ScreensRoot = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Header />
      <Switch>
        <Route exact path='/' component={ScreensTodoList} />
        <Route path='/todo/add' component={ScreensTodoAdd} />
        <Route path='/todo/:id' component={ScreensTodoEdit} />
      </Switch>
    </Router>
  </Provider>
);

export default ScreensRoot;
