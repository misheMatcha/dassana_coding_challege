import { Component } from 'react';
import { Route } from 'react-router-dom';

export const RenderRoute = ({
  component: Component,
  path,
  exact
}) => (
  <Route path={path} exact={exact} render={() => <Component />} />
);