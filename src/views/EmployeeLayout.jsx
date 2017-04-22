import React from 'react';
import { Switch, Route } from 'react-router-dom';
import DisplayProductsPage from '../containers/DisplayProductsPage';
import EditProductPage from '../containers/EditProductPage';

const Test = () => <div>Test</div>

const EmployeeLayout = ({ match }) => (
  <div>
    <header className="container">Header</header>
    <div className="container">
      <Switch>
        <Route path={`${match.url}/games/add`} component={Test} />
        <Route path={`${match.url}/games/:id`} component={EditProductPage} />
        <Route path={`${match.url}/games`} component={DisplayProductsPage} />
        <Route component={Test} />
      </Switch>
    </div>
  </div>
);

export default EmployeeLayout;
