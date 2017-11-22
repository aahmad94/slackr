import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/root_reducer';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Wookiee</h1>, root);
});
