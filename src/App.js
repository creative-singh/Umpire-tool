import React, { Component } from 'react';
import Button from './Button';
import './App.css';

class App extends Component {

  state = {
    value: 0
  };

  PlusOperation = () => {
    this.setState({
      value: this.state.value + 1
    });
  };

  MinusOperation = () => {
    this.setState({
      value: this.state.value - 1
    });
  };

  ResetOperation = () => {
    this.setState({
      value: 0
    });
  };

  render() {
    return (
      <div className="main-div" >
        <label className="counter">{this.state.value}</label>
        <br />
        <Button title={'-'} clickable={this.MinusOperation} />
        <Button title={'0'} clickable={this.ResetOperation} />
        <Button title={'+'} clickable={this.PlusOperation} />
      </div>
    );
  }
};

export default App;