import React from "react";
import { Route, Switch, useHistory, useRouteMatch } from "react-router-dom";
import Button from "@material-ui/core/Button";

const Home: React.FC<{}> = () => {
  const history = useHistory();
  const match = useRouteMatch();
  return (
    <Switch>
      <Route path={match.path + "home"} exact>
        <div>
          <h3>Home</h3>
          <Button size="small" onClick={() => history.push('/coffee')}>coffee list</Button>
        </div>
      </Route>
    </Switch>
  );
};

export default Home;
