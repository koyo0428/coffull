import logo from './logo.svg';
import './App.css';
import React, {Component} from 'react';

const list = [
  {
    id: 1,
    title: "1st book",
    subtitle: "sub titile 1",
    author: "author 1",
    isbn: "123-00001"
  },
  {
    id: 2,
    title: "2nd book",
    subtitle: "sub titile 2",
    author: "author 2",
    isbn: "123-00002"
  },
  {
    id: 3,
    title: "3rd book",
    subtitle: "sub titile 3",
    author: "author 3",
    isbn: "123-00003"
  }
]

class App extends Component {
  constructor (props) {
    super(props);
    this.state = {list};
  }

  render() {
    return (
      <div>
        {this.state.list.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <p>{item.subtitle}</p>
            <p>{item.author}</p>
            <p>{item.isbn}</p>
          </div>
        ))}
      </div>
    )
  }
}

export default App;
