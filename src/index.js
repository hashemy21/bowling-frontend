import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Appp from './Appp';
import registerServiceWorker from './registerServiceWorker';

import {Provider} from 'react-redux';
import store from './store.js'

ReactDOM.render(
  <Provider store={store}>
    <Appp />
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
