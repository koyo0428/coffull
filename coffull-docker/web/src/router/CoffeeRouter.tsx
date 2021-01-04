import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CoffeeCardList from "components/coffee/CoffeeCardList";
import CoffeeDetail from "components/coffee/CoffeeDetail";
import CoffeeRegister from "components/coffee/CoffeeRegister";

const CoffeeRouter: React.FC<{}> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      {/* コーヒーノート一覧 */}
      <Route path={match.path + "coffee"} exact>
        <CoffeeCardList />
      </Route>
      {/* コーヒーノート詳細 */}
      <Route path={match.path + "coffee/:coffeeId"}>
        <CoffeeDetail />
      </Route>
      {/* コーヒーノート登録 */}
      <Route path={match.path + "coffee-register"}>
        <CoffeeRegister />
      </Route>
    </Switch>
  );
};

export default CoffeeRouter;
