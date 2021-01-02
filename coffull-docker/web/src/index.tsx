import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import CommonTemplate from "./template/CommonTemplate";
import CommonRouter from "./template/CommonRouter";
import Coffee from "./components/coffee/Coffee";
import Home from "./components/home/Home";

ReactDOM.render(
  <React.StrictMode>
    <CommonRouter>
      <CommonTemplate title="トップページ">
        <Coffee />
        <Home />
      </CommonTemplate>
    </CommonRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
