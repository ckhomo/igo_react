import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./containers/App";
import configureStore from "./store/configureStore";

import * as serviceWorker from "./serviceWorker";

const store = configureStore();
const DEFAULT_POS = { position: [] };

if (!localStorage.getItem("posBlack")) {
  localStorage.setItem("posBlack", DEFAULT_POS);
  localStorage.setItem("posWhite", DEFAULT_POS);
}

ReactDOM.render(
  <React.StrictMode>
    <App store={store} />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
