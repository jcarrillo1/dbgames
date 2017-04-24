import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DefaultLogin from '../containers/DefaultLogin';
import DefaultSignUp from '../containers/DefaultSignUp';
import BaseHeader from '../components/headers/BaseHeader';
import Mismatch from '../components/common/Mismatch';

const BaseLayout = () => (
  <div>
    <BaseHeader />
    <div className="container">
      <Switch>
        <Route exact path="/" component={() => <div>Dashboard</div>} />
        <Route path="/login" component={DefaultLogin} />
        <Route path="/signup" component={DefaultSignUp} />
        <Route component={Mismatch} />
      </Switch>
    </div>
  </div>
);

export default BaseLayout;
