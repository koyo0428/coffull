import Login from "components/auth/Login";
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "utils/AuthProvider";

// CommonRouterのpropsのtype aliasを定義
type CommonRouterProps = {
  children: any;
};

const RouterTemplate: React.FC<CommonRouterProps> = (props) => {
  return (
    <Router>
      <AuthProvider>
        <Route path="/">{props.children}</Route>
        <Route exact path="/login" component={Login} />
      </AuthProvider>
    </Router>
  );
};

export default RouterTemplate;
