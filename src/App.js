import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import EmployeeLayout from './views/EmployeeLayout';
import AuthWrapper from './components/common/AuthWrapper';
import EmployeeLogin from './containers/EmployeeLogin';
import AdminLogin from './containers/AdminLogin';
import './App.css';

const Placeholder = (name) => () => <div>Testing {name}</div>

const WrappedAdminDashboard = AuthWrapper(Placeholder('Admin Dashboard'), ['admin'], '/admin/login');
const WrappedEmployeeDashboard = AuthWrapper(EmployeeLayout, ['admin', 'employee'], '/employee/login');

const App = () => (
  <Switch>
    <Route path="/admin/login" component={AdminLogin} />
    <Route path="/admin" component={WrappedAdminDashboard} />
    <Route path="/employee/login" component={EmployeeLogin} />
    <Route path="/employee" component={WrappedEmployeeDashboard} />
    <Route component={BaseLayout} />
  </Switch>
);

export default App;
