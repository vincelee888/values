import React, { Component } from "react";

class Intro extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Intro</h1>
        <p>blah blah</p>
        <button onClick={() => this.props.nextStep()}>Next</button>
      </div>
    );
  }
}

export default Intro;
