import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import './App.css';

const Placeholder = (name) => () => <div>Testing {name}</div>

const App = () => (
  <Switch>
    <Route path="/admin/login" component={Placeholder('Admin login')} />
    <Route path="/admin" component={Placeholder('Admin Dashboard')} />
    <Route path="/employee/login" component={Placeholder('Employee Login')} />
    <Route path="/employee" component={Placeholder('Employee Dashboard')} />
    <Route component={BaseLayout} />
  </Switch>
);

export default App;
