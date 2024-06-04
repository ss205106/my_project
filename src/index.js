import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';
import { legacy_createStore,applyMiddleware } from 'redux';
import { rootReducer } from './modules';
import logger from 'redux-logger';
import { check,set_user } from './modules/user';
const store = legacy_createStore(rootReducer,applyMiddleware(thunk,logger))

function localUser(){
  try{
   const user = localStorage.getItem('user')
   console.log(localStorage)
   if(!user) return;
   store.dispatch(set_user(JSON.parse(user)))
   store.dispatch(check())
   }catch(e){
    console.log(e)
   }
}
localUser()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
  </Provider>
=======

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
>>>>>>> 314b713164e80cef4fd50e0f6c214a789b68897a
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
