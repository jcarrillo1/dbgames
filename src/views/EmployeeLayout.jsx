import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Main from '../containers/employee/Main';
import AddProduct from '../containers/employee/AddProduct';
import EditProduct from '../containers/employee/EditProduct';
import EmployeeHeader from '../components/headers/EmployeeHeader';
import Mismatch from '../components/common/Mismatch';

const EmployeeLayout = ({ match }) => (
  <div>
    <EmployeeHeader />
    <div className="container">
      <Switch>
        <Route path={`${match.url}/games/add`} component={AddProduct} />
        <Route path={`${match.url}/games/:id`} component={EditProduct} />
        <Route exact path={`${match.url}`} component={Main} />
        <Route component={Mismatch} />
      </Switch>
    </div>
  </div>
);

export default EmployeeLayout;
