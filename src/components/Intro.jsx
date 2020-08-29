import React, { Component } from "react";

class Intro extends Component {
  state = {};
  render() {
    return (
      <article>
        <h1>Value-Driven Decision Making</h1>
        <p>
          During stressful times, we often allow an automatic reaction take
          control, and lead us into an undesirable outcome. By identifying our
          core values or qualities that are important to us, and keeping those
          in mind throughout the day, we can take actions that embody and fulfil
          these values, leading us down a more beneficial and fulfilling path.
        </p>
        <p>This app seeks to help you discover your own personal values.</p>
        <button onClick={() => this.props.nextStep()}>Start</button>
      </article>
    );
  }
}

export default Intro;
