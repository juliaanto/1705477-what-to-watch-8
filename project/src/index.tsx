import {applyMiddleware, createStore} from 'redux';
import {fetchFilmsAction, fetchPromoAction} from './store/api-actions';

import App from './components/app/app';
import {Provider} from 'react-redux';
import React from 'react';
import ReactDOM from 'react-dom';
import {ThunkAppDispatch} from './types/action';
import api from './services/api';
import {composeWithDevTools} from 'redux-devtools-extension';
import {redirect} from './store/middlewares/redirect';
import {rootReducer} from './store/root-reducer';
import thunk from 'redux-thunk';

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    applyMiddleware(thunk.withExtraArgument(api)),
    applyMiddleware(redirect),
  ),
);

(store.dispatch as ThunkAppDispatch)(fetchFilmsAction());
(store.dispatch as ThunkAppDispatch)(fetchPromoAction());

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
