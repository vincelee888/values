import React, { Component } from "react";

import Value from "./Value";
import {
  SectionStyles,
  ButtonStyles,
  MainInputStyles,
  ValueStyles,
} from "./styles";

class Top3 extends Component {
  state = {};
  render() {
    return (
      <SectionStyles>
        <h1>Top3</h1>
        {Array.from(this.props.top10).map((curr) => {
          const { key, description } = this.props.values.find(
            (v) => v.key === curr
          );
          return (
            <ValueStyles>
              <h1>{key}</h1>
              <p>{description}</p>
              <ButtonStyles onClick={() => this.props.moveToTop("top10", key)}>
                Move to Top
              </ButtonStyles>
              <ButtonStyles onClick={() => this.props.moveUp("top10", key)}>
                Move Up
              </ButtonStyles>
              <ButtonStyles onClick={() => this.props.moveDown("top10", key)}>
                Move Down
              </ButtonStyles>
            </ValueStyles>
          );
        })}
        <MainInputStyles>
          <ButtonStyles onClick={() => this.props.nextStep()}>
            Finish
          </ButtonStyles>
        </MainInputStyles>
      </SectionStyles>
    );
  }
}

export default Top3;
