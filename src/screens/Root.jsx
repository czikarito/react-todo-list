import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import ScreensTodoList from './Todo/List';
import ScreensTodoEdit from './Todo/Edit';
import ScreensTodoAdd from './Todo/Add';

const ScreensRoot = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/'>Todo List</Link>
            </li>
            <li>
              <Link to='/todo/add'>Add Todo</Link>
            </li>
          </ul>
        </nav>
      </div>
      <Switch>
        <Route exact path='/' component={ScreensTodoList} />
        <Route path='/todo/add' component={ScreensTodoAdd} />
        <Route path='/todo/:id' component={ScreensTodoEdit} />
      </Switch>
    </Router>
  </Provider>
);

export default ScreensRoot;
