import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(json => {
        this.setState({
          isLoaded: true,
          items: json
        });
      });
  }

  render() {
    let { isLoaded, items } = this.state;

    if (!isLoaded) {
      return <div>Loading data...</div>;
    } else {
      return (
        <div className="App">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                <strong>Name:</strong> {item.name} <br />
                <strong>Email:</strong> {item.email} <br />
                <strong>City: </strong>
                {item.address.city} <br /> <strong>Phone:</strong> {item.phone}
                <br />
                <br />
              </li>
            ))}
          </ul>
        </div>
      );
    }
  }
}

export default App;
