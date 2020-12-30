import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CommonTemplate from './template/CommonTemplate';
import App from './components/App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <CommonTemplate title="トップページ">
      <App />
    </CommonTemplate>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
