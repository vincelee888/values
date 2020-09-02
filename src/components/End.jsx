import React, { Component } from "react";

import Value from "./Value";
import { SectionStyles } from "./styles";

class End extends Component {
  state = {};
  render() {
    return (
      <SectionStyles>
        <h1>Your Core Values</h1>
        <p>You have defined your core Values at this point in time, to be:</p>
        {Array.from(this.props.myValues).map((curr) => {
          const { key, description } = this.props.values.find(
            (v) => v.key === curr
          );
          return <Value name={key} description={description} />;
        })}
      </SectionStyles>
    );
  }
}

export default End;
