import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TopNavigation from './components/TopNavigation';
import Board from './pages/BoardMain';
import reportWebVitals from './reportWebVitals';


ReactDOM.render(
  <React.StrictMode>
    <header>
      <TopNavigation />
    </header>
    <Board />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
