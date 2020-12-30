import React from "react";
import axios from "axios";
import { CoffeeType } from "../types/CoffeeType"
import CoffeeCard from "./CoffeeCard";
import '../assets/styles/App.css'

// Appのpropsのtype aliasを定義
type AppProps = {

}

// AppのLocalStateのtype aliasを定義
type AppState = {
  coffees: Array<CoffeeType>
}

class App extends React.Component<AppProps, AppState> {
  constructor(props: AppProps) {
    super(props);
    // stateの初期状態
    this.state = {
      coffees: []
    }
  }

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios
      .get("http://localhost:8000/api")
      .then((res) => {
        this.setState({ coffees: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.coffees.map((item,i) => {
          return (
            <div key={i} className="card-container">
              <CoffeeCard coffee = {item} />
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
