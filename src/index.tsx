import initStore from "./store/Store";
import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/main.css";
import "./assets/css/vendors/main.css";
import App from "./assets/views/app/App";

import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
export const history = createBrowserHistory();
export const store = initStore(history);

ReactDOM.render(
    <Provider store={store}>

<App  />
</Provider>, document.getElementById("root"));

