import React from "react";
import "./App.css";
import dogs from "./dogs";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      data: dogs,
      num: 0,
    };
    this.decrease = this.decrease.bind(this);
    this.increase = this.increase.bind(this);
  }
  decrease() {
    if (this.state.num) {
      this.setState({ num: this.state.num - 1 });
    } else {
      this.setState({ num: this.state.data.length - 1 });
    }
  }
  increase() {
    if (this.state.num === this.state.data.length - 1) {
      this.setState({ num: 0 });
    } else {
      this.setState({ num: this.state.num + 1 });
    }
  }
  render() {
    return (
      <div className="App">
        <div className="main">
          <h1>My Dogs</h1>
          <div className="image-container">
            <img
              src={this.state.data[this.state.num].url}
              alt="dog"
              className="image"
            />
          </div>
          <div className="menu">
            <button onClick={this.decrease}>previous</button>
            <h2>Image: {this.state.num+1}</h2>
            <button onClick={this.increase}>next</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
