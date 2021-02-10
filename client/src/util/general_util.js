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

// we only need the elapsed time since published
// after specific increments we only need the general value (ex: weeks, months, etc)
// basing everything off of milliseconds
export const timeSincePublished = date => {
  const second = 1000;
  const minute = 60000;
  const hour = 3600000;
  const day = 86400000;
  const week = 604800000;
  const month = 2419200000;
  const year = 29030400000;

  let diff = new Date() - new Date(date);
  let whichIncrement = '';

  if(diff < minute){
    diff /= second;
    whichIncrement = 'seconds';

  }else if(diff < hour){
    diff /= minute;
    whichIncrement = 'minutes';

  }else if(diff < day){
    diff /= hour;
    whichIncrement = 'hours';

  }else if(diff < week){
    diff /= day;
    whichIncrement = 'days';

  }else if(diff < month){
    diff /= week;
    whichIncrement = 'weeks';

  }else if(diff < year){
    diff /= month;
    whichIncrement = 'months';

  }else{
    diff /= year;
    whichIncrement = 'years';
  }

  return `${Math.trunc(diff)} ${whichIncrement} ago`;
};