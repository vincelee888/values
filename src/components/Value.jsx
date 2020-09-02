import React, { Component } from "react";

import { ValueStyles } from "./styles";

class Value extends Component {
  state = {};
  render() {
    return (
      <ValueStyles>
        <h1>{this.props.name}</h1>
        <p>{this.props.description}</p>
      </ValueStyles>
    );
  }
}

export default Value;
