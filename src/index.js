/*
    ./client/index.js
    which is the webpack entry file
*/


console.log('Hello Andrew!!')


/* 
    ./client/index.js
*/
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App.jsx';
import Hello from './components/Hello.jsx';
import Momento from './components/Momento.jsx';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Hello />, document.getElementById('hello'));
ReactDOM.render(<Momento />, document.getElementById('momento'));