import React from "react";
import { Switch, useRouteMatch } from "react-router-dom";
import CoffeeNoteList from "components/coffee_note/CoffeeNoteList";
import CoffeeNoteDetail from "components/coffee_note/CoffeeNoteDetail";
import CoffeeNoteRegister from "components/coffee_note/CoffeeNoteRegister";
import PrivateRoute from "./PrivateRoute";

const CoffeeNoteRouter: React.FC<{}> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      {/* コーヒーノート一覧 */}
      <PrivateRoute key={"init"} path={match.path + "coffee-notes"} component={CoffeeNoteList} exact />
      {/* コーヒーノート一覧 */}
      <PrivateRoute key={"search"} path={match.path + "coffee-notes/:search"} component={CoffeeNoteList} exact />
      {/* コーヒーノート登録 */}
      <PrivateRoute path={match.path + "note-register"} component={CoffeeNoteRegister} />
      {/* コーヒーノート詳細 */}
      <PrivateRoute path={match.path + "coffee-note/:noteId"} component={CoffeeNoteDetail} />
    </Switch>
  );
};

export default CoffeeNoteRouter;
