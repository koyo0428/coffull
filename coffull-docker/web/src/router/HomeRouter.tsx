import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import Home from "components/home/Home";

const HomeRouter: React.FC<{}> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path} exact>
        <Home />
      </Route>
    </Switch>
  );
};

export default HomeRouter;
