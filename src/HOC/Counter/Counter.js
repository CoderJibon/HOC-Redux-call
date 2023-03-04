import React, { Component } from "react";

const Counter = (OriginalComponents) => {
  class NewComponents extends Component {
    constructor(props) {
      super(props);
      this.state = {
        counter: 0,
      };
    }

    handleDsc = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: prevState.counter - 1,
      }));
    };
    handleInc = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: prevState.counter + 1,
      }));
    };
    handleReset = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: 0,
      }));
    };
    handleRandom = () => {
      this.setState((prevState) => ({
        ...prevState,
        counter: Math.floor(Math.random() * 1000 + 1000),
      }));
    };
    render() {
      return (
        <OriginalComponents
          counter={this.state.counter}
          handleDsc={this.handleDsc}
          handleInc={this.handleInc}
          handleReset={this.handleReset}
          handleRandom={this.handleRandom}
        ></OriginalComponents>
      );
    }
  }
  return NewComponents;
};

export default Counter;
