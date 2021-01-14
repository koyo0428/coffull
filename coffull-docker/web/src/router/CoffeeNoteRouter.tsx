import React from "react";
import { Route, Switch, useRouteMatch } from "react-router-dom";
import CoffeeNoteList from "components/coffee_note/CoffeeNoteList";
import CoffeeNoteDetail from "components/coffee_note/CoffeeNoteDetail";
import CoffeeNoteRegister from "components/coffee_note/CoffeeNoteRegister";

const CoffeeNoteRouter: React.FC<{}> = () => {
  const match = useRouteMatch();
  return (
    <Switch>
      {/* コーヒーノート一覧 */}
      <Route key={"init"} path={match.path + "coffee-notes"} exact>
        <CoffeeNoteList />
      </Route>
      {/* コーヒーノート一覧 */}
      <Route key={"search"} path={match.path + "coffee-notes/:search"} exact>
        <CoffeeNoteList />
      </Route>
      {/* コーヒーノート登録 */}
      <Route path={match.path + "note-register"} >
        <CoffeeNoteRegister />
      </Route>
      {/* コーヒーノート詳細 */}
      <Route path={match.path + "coffee-note/:noteId"}>
        <CoffeeNoteDetail />
      </Route>
    </Switch>
  );
};

export default CoffeeNoteRouter;
