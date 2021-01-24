import React, { useContext } from "react";
import { Route, RouteProps } from "react-router-dom";
import { AuthContext } from "utils/AuthProvider";
import Login from "components/auth/Login";

const PrivateRoute = ({ component: RouteComponent, ...options }: RouteProps) => {
  const { currentUser } = useContext(AuthContext);
  const Component = currentUser ? RouteComponent : Login;

  return <Route {...options} component={Component} />;
};

export default PrivateRoute;