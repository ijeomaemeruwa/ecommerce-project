import React from 'react';
import ReactDOM from 'react-dom';
import App from '../src/container/App';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import { store, persistor } from '../src/redux/store'
import { PersistGate } from 'redux-persist/integration/react'


ReactDOM.render(
  <Provider store={store}>
  <BrowserRouter>
  <PersistGate persistor={persistor}>
    <App />
  </PersistGate>
  </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


