import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import STORE from './components/store'
import App from './App';

ReactDOM.render(
  <App store={STORE} />,
  document.getElementById('root'),
);