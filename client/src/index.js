import React from 'react';
import ReactDOM from 'react-dom';
import Root from './root';
import 'semantic-ui-css/semantic.min.css'

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<Root />, root);
});