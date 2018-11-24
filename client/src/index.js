import React from "react";
import { render } from "react-dom";
import App from "./app";
import styles from "./assets/scss/index.scss";

import { store } from "./store";
import { Provider } from "react-redux";

render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root')
);
