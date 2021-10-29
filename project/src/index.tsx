import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import App from './components/app/app';
import {films, PROMO} from './mocks/films';
import {reducer} from './store/reducer';

const store = createStore(reducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store = {store}>
      <App
        promo={PROMO}
        films={films}
      />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'));
