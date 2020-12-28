import React, { Component } from "react";
import axios from "axios";

class App extends Component {
  state = {
    coffee: [],
  };

  componentDidMount() {
    this.getBooks();
  }

  getBooks() {
    axios
      .get("http://localhost:8000/api")
      .then((res) => {
        this.setState({ coffee: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div>
        {this.state.coffee.map((item,i) => {
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
