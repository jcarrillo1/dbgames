import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BaseLayout from './views/BaseLayout';
import EmployeeLayout from './views/EmployeeLayout';
import AdminLayout from './views/AdminLayout';
import AuthWrapper from './components/common/AuthWrapper';
import AuthRedirectWrapper from './components/common/AuthRedirectWrapper';
import EmployeeLogin from './containers/employee/Login';
import AdminLogin from './containers/admin/Login';
import './App.css';

const WrappedBaseLayout = AuthRedirectWrapper(BaseLayout);
const WrappedAdminDashboard = AuthWrapper(AdminLayout, ['admin'], '/admin/login');
const WrappedEmployeeDashboard = AuthWrapper(EmployeeLayout, ['admin', 'employee'], '/employee/login');

const App = () => (
  <Switch>
    <Route path="/admin/login" component={AdminLogin} />
    <Route path="/admin" component={WrappedAdminDashboard} />
    <Route path="/employee/login" component={EmployeeLogin} />
    <Route path="/employee" component={WrappedEmployeeDashboard} />
    <Route component={WrappedBaseLayout} />
  </Switch>
);

export default App;
