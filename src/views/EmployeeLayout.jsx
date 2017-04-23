import React from 'react';
import { Switch, Route } from 'react-router-dom';
import AddProductPage from '../containers/AddProductPage';
import DisplayProductsPage from '../containers/DisplayProductsPage';
import EditProductPage from '../containers/EditProductPage';
import EmployeeHeader from '../components/headers/EmployeeHeader';
import Mismatch from '../components/common/Mismatch';

const Test = () => <div>Test</div>

const EmployeeLayout = ({ match }) => (
  <div>
    <EmployeeHeader />
    <div className="container">
      <Switch>
        <Route path={`${match.url}/games/add`} component={AddProductPage} />
        <Route path={`${match.url}/games/:id`} component={EditProductPage} />
        <Route exact path={`${match.url}`} component={DisplayProductsPage} />
        <Route component={Mismatch} />
      </Switch>
    </div>
  </div>
);

export default EmployeeLayout;
