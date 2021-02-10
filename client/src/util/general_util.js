import { Route } from 'react-router-dom';
import { Loader } from 'semantic-ui-react';

export const RenderRoute = ({
  component: Component,
  path,
  exact
}) => (
  <Route path={path} exact={exact} render={() => <Component />} />
);

export const loading = (
  <div>
    <Loader size='massive' active />
  </div>
);