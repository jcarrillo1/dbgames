import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../containers/default/Login';
import SignUp from '../containers/default/SignUp';
import Main from '../containers/default/Main';
import Product from '../containers/default/Product';
import Platform from '../containers/default/Platform';
import BaseHeader from '../components/headers/BaseHeader';
import Mismatch from '../components/common/Mismatch';

const PS4Page = Platform('ps4');
const XboxOnePage = Platform('xbox-one');
const SwitchPage = Platform('switch');
const PCPage = Platform('pc');

const BaseLayout = () => (
  <div>
    <BaseHeader />
    <div className="container">
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/platforms/ps4" component={PS4Page} />
        <Route path="/platforms/xbox-one" component={XboxOnePage} />
        <Route path="/platforms/pc" component={PCPage} />
        <Route path="/platforms/switch" component={SwitchPage} />
        <Route path="/product/:id" component={Product} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route component={Mismatch} />
      </Switch>
    </div>
  </div>
);

export default BaseLayout;
