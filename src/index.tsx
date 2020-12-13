import React from 'react';
import ReactDOM from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { Provider } from 'react-redux';

import Routes from './Routes';
import { store } from './store';

const entryBlock = document.getElementById('root') as HTMLElement;
const renderFunction: Function = entryBlock.hasChildNodes() ? ReactDOM.hydrate : ReactDOM.render;

renderFunction(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        {renderRoutes(Routes)}
      </div>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
