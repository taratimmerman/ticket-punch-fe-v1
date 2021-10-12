import React from 'react';

import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import App from './App';
import Store from './helpers/store';

ReactDOM.render(
  <Provider store={Store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
