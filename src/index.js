import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from 'react-redux'
import { BrowserRouter } from "react-router-dom";
import store from './store';
import "./index.css";
import registerServiceWorker from './registerServiceWorker';




ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
        <App name='Milos' />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
