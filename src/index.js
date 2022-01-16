import React, { lazy } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import store  from "./redux/storeConfig/store";
import App from "./App.js";


ReactDOM.render(
  <Provider store={store}>
      <App />
  </Provider>,
  document.getElementById("root"),
);

serviceWorker.register();