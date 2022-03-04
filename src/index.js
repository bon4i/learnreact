import React from 'react';
import ReactDOM from 'react-dom';
import store from './Redux/state.js';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

let _callSubscriber = (state) => {
    ReactDOM.render(
      <React.StrictMode>
        <BrowserRouter>
          <App state={store.getState()} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>
      </React.StrictMode>,
      document.getElementById('root')
    );
}

_callSubscriber (store.getState);

store.subscribe(_callSubscriber);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();