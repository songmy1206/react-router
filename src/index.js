import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import rootReducers from './store';
import { configureStore } from '@reduxjs/toolkit';

const reduxDevTool =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = configureStore({ reducer: rootReducers }, reduxDevTool);
// console.log(rootReducer.getState());

// let weight = 100;
// const date = new Date();

// function reducer(state = weight, action) {
//   if (action.type == '증가') {
//     state += date.getDate();
//     return state;
//   } else if (action.type == '감소') {
//     state -= date.getMonth() + 1;
//     return state;
//   } else {
//     return state;
//   }
// }

// let store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>,
);
reportWebVitals();
