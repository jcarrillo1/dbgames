import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DisplayUsersPage from '../containers/DisplayUsersPage';
import EditUserPage from '../containers/EditUserPage';
import AdminHeader from '../components/headers/AdminHeader';
import Mismatch from '../components/common/Mismatch';

const EmployeeLayout = ({ match }) => (
  <div>
    <AdminHeader />
    <div className="container">
      <Switch>
        <Route path={`${match.url}/users/:id`} component={EditUserPage} />
        <Route exact path={`${match.url}`} component={DisplayUsersPage} />
        <Route component={Mismatch} />
      </Switch>
    </div>
  </div>
);

export default EmployeeLayout;
