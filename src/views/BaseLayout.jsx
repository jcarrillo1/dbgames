import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BaseHeader from '../components/headers/BaseHeader';
import AddProductPage from '../containers/AddProductPage';

const BaseLayout = () => (
  <div>
    <BaseHeader />
    <div className="container">
      <Switch>
        <Route exact path="/" component={AddProductPage} />
      </Switch>
    </div>
  </div>
);

export default BaseLayout;
