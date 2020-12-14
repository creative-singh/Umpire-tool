import React, { Component } from "react";
import Button from "./Button";
import "./App.css";

class App extends Component {
  state = {
    balls: 0,
    over: 0,
  };

  PlusOperation = () => {
    if (this.state.balls < 6) {
      this.setState({
        balls: this.state.balls + 1,
      });
    }
    if (this.state.balls === 6) {
      this.setState({
        over: this.state.over + 1,
        balls: 1,
      });
    }
  };

  MinusOperation = () => {
    if (this.state.balls > 0) {
      this.setState({
        balls: this.state.balls - 1,
      });
    }
    if (this.state.balls === 0 && this.state.over !== 0) {
      this.setState({
        over: this.state.over - 1,
      });
    }
  };

  render() {
    return (
      <div className="main-div">
        <div>
          <label className="Label">Balls</label>
          <label className="Label">Overs</label>
          <br />
          <label className="counter">
            {this.state.balls}
          </label>
          <label className="counter">
            {this.state.over}
          </label>
          <br />
          <div style={{ textAlign: "center" }}>
            <Button
              title={"-"}
              clickable={this.MinusOperation}
            />
            <Button
              title={"+"}
              clickable={this.PlusOperation}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
