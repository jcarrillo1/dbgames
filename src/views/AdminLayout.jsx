import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../containers/admin/Main';
import EditUser from '../containers/admin/EditUser';
import AdminHeader from '../components/headers/AdminHeader';
import Mismatch from '../components/common/Mismatch';

const EmployeeLayout = ({ match }) => (
  <div>
    <AdminHeader />
    <div className="container">
      <Switch>
        <Route path={`${match.url}/users/:id`} component={EditUser} />
        <Route exact path={`${match.url}`} component={Main} />
        <Route component={Mismatch} />
      </Switch>
    </div>
  </div>
);

export default EmployeeLayout;
