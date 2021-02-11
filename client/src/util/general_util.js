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
    whichIncrement = 'second';

  }else if(diff < hour){
    diff /= minute;
    whichIncrement = 'minute';

  }else if(diff < day){
    diff /= hour;
    whichIncrement = 'hour';

  }else if(diff < week){
    diff /= day;
    whichIncrement = 'day';

  }else if(diff < month){
    diff /= week;
    whichIncrement = 'week';

  }else if(diff < year){
    diff /= month;
    whichIncrement = 'month';

  }else{
    diff /= year;
    whichIncrement = 'year';
  }

  diff = Math.trunc(diff);

  return `${diff} ${whichIncrement}${diff <= 1 ? '' : `s`} ago`;
};

// original format: year-month-day(time attached to date)
// isolate day
// to get month -1 from number to get the index from the array
export const convertPublishDateFormat = date => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr',
                  'May', 'Jun', 'Jul', 'Aug',
                  'Sep', 'Oct', 'Nov', 'Dec'];
  const dateSections = date.split('-');
  dateSections[2] = dateSections[2].slice(0,2);

  return `${months[dateSections[1] - 1]} ${dateSections[2]}, ${dateSections[0]}`;
};