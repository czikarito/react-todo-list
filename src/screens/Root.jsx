import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import ScreensTodoList from './Todo/List';
import ScreensTodoEdit from './Todo/Edit';
import ScreensTodoAdd from './Todo/Add';
import Header from '../components/shared/Header';

const ScreensRoot = ({ store }) => (
  <Provider store={store}>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={ScreensTodoList} />
        <Route path='/todo/add' component={ScreensTodoAdd} />
        <Route path='/todo/:id' component={ScreensTodoEdit} />
      </Switch>
    </BrowserRouter>
  </Provider>
);

export default ScreensRoot;
