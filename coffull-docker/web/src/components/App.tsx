import React from "react";
import '../assets/styles/App.css'
import CoffeeCardList from "./CoffeeCardList";
import CoffeeDetail from "./CoffeeDetail";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  useParams,
  useHistory,
  useLocation,
} from "react-router-dom";

// Appのpropsのtype aliasを定義
type AppProps = {

}

const App: React.FC<AppProps> = (props) => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <CoffeeCardList />
        </Route>
        <Route path="/coffee/:coffeeId">
          <CoffeeDetail />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
