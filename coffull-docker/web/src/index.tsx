import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import RouterTemplate from "./template/RouterTemplate";
import CommonTemplate from "./template/CommonTemplate";
import HomeRouter from "./router/HomeRouter";
import CoffeeRouter from "./router/CoffeeRouter";

ReactDOM.render(
  <React.StrictMode>
    <RouterTemplate>
      <CommonTemplate title="トップページ">
        <HomeRouter />
        <CoffeeRouter />
      </CommonTemplate>
    </RouterTemplate>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
