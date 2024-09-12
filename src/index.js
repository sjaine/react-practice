import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import HelloWorld from './day01/HelloWorld';
import Counter from './day01/Counter';
import InputDisplay from './day01/InputDisplay';
import List from './day01/List';
import Toggle from './day01/Toggle';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelloWorld />
    <Counter />
    <InputDisplay />
    <Toggle />
    <List />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
