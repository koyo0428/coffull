import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// CommonRouterのpropsのtype aliasを定義
type CommonRouterProps = {
    children: any,
}

const RouterTemplate: React.FC<CommonRouterProps> = (props) => {
  return (
    <Router>
      <Route path="/">
          {props.children}
      </Route>
    </Router>
  );
};

export default RouterTemplate;
