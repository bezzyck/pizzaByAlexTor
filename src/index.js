import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {Provider} from 'react-redux'

//Style
import './scss/app.scss';

//Component
import App from './App';
import store from './redux/store';

ReactDOM.render(
      <BrowserRouter>
          <Provider store={store}>
              <App />
          </Provider>
      </BrowserRouter>,
  document.getElementById('root')
);


