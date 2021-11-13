import {applyMiddleware, createStore} from 'redux';

import App from './components/app/app';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {ThunkAppDispatch} from './types/action';
import api from './services/api';
import {composeWithDevTools} from 'redux-devtools-extension';
import {fetchFilmsAction} from './store/api-actions';
import {reducer} from './store/reducer';
import thunk from 'redux-thunk';

const store = createStore(
  reducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
  ),
);

(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
