import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import AppRouter from "./routers/AppRouter";
import configureStore from "./store/configureStore";
import { addExpense } from "./actions/expenses";
import "normalize.css/normalize.css";
import "./styles/styles.scss";
import "react-dates/lib/css/_datepicker.css";

const store = configureStore();

store.dispatch(addExpense({ description: "Water Bill", amount: 11200, createdAt: 211000 }));
store.dispatch(addExpense({ description: "Gas Bill", amount: 30000, createdAt: 10 }));
store.dispatch(addExpense({ description: "Rent", amount: 140000, createdAt: 1000 }));

const jsx = (
  <Provider store={store} >
    <AppRouter />
  </Provider>
);



ReactDOM.render(jsx, document.getElementById("app"));
