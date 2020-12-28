import React from "react";
import axios from "axios";

// Appのpropsのtype aliasを定義
type AppProps = {

}

// Bookのtype
type CoffeeType = {
  name: string,
  feature: string,
  taste: string,
  impressions: string,
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
            <div key={i}>
              <h1>{item.name}</h1>
              <p>feature : {item.feature}</p>
              <p>taste : {item.taste}</p>
              <p>impressions : {item.impressions}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
