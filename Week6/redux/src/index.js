import React from "react";
import ReactDOM from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";

import "./index.css";
import App from "./App";
import reducer from "./store/reducer";

const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <h1>PROJECT 6 - CES26 ITA</h1>

    <h2>Eduardo Menezes Moraes COMP22</h2>
    <App />
  </Provider>,
  document.getElementById("root")
);
