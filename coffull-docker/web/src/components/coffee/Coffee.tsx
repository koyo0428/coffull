import React from "react";
import CoffeeCardList from "./CoffeeCardList";
import CoffeeDetail from "./CoffeeDetail";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useRouteMatch,
} from "react-router-dom";

const Coffee: React.FC<{}> = (props) => {
  const match = useRouteMatch();
  return (
      <Switch>
        <Route path={match.path + "coffee"} exact>
          <CoffeeCardList />
        </Route>
        <Route path={match.path + "coffee/:coffeeId"}>
          <CoffeeDetail />
        </Route>
      </Switch>
  );
}

export default Coffee;
