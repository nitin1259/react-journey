import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { combineReducers, createStore } from "redux";
import reducers from "./stores/reducers";
import { Provider } from "react-redux";
import counterReducer from "./stores/reducers/counterReducer";
import resultReducer from "./stores/reducers/resultReducer";

const rootReducer = combineReducers({
  cntr: counterReducer,
  rslt: resultReducer,
});

// const store = createStore(reducers);
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
