import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import { MainProvider } from "./context/MainContext.jsx";

import App from "./App.jsx";
import "./index.scss";
import "antd/dist/reset.css";
import { store } from "./redux/store/index.js";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MainProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </MainProvider>
  </React.StrictMode>
);
