import React from 'react';
import { Route, Link, Switch, BrowserRouter as Router } from 'react-router-dom';
import Dashboard from '../pages/dashboard/dashboard';
import Drivers from '../pages/drivers/drivers';
import Trips from '../pages/trips/trip';

const routes = (
  <Router>
    <div>
      <Route exact path="/" component={Dashboard} />
      <Route path="/drivers" component={Drivers} />
      <Route path="/trip/:tripID" component={Trips} />
    </div>
  </Router>
);

export default routes;
