import React, { Component } from "react";

import {
  ValueStyles,
  MainInputStyles,
  ButtonStyles,
  SectionStyles,
} from "./styles";

class Value extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <ValueStyles>
        <h1>{this.props.value.key}</h1>
        <p>{this.props.value.description}</p>
        <ButtonStyles
          onClick={() =>
            this.props.addToGroup("priority", this.props.value.key)
          }
        >
          &lt;
        </ButtonStyles>
        <ButtonStyles
          onClick={() => this.props.addToGroup("top10", this.props.value.key)}
        >
          &gt;
        </ButtonStyles>
      </ValueStyles>
    );
  }
}
class Button extends Component {
  state = {};
  render() {
    if (this.props.top10.size === 10) {
      return (
        <MainInputStyles>
          <ButtonStyles onClick={() => this.props.nextStep()}>
            Next
          </ButtonStyles>
        </MainInputStyles>
      );
    } else {
      return <span></span>;
    }
  }
}

class Top10 extends Component {
  toValueComponent = (curr) => {
    return (
      <Value
        value={this.props.values.find((v) => v.key === curr)}
        addToGroup={this.props.addToGroup}
      />
    );
  };
  render() {
    return (
      <SectionStyles>
        <h1>Refine</h1>
        <div className="columns">
          <section className="col col--two">
            <h2>Your Most Important Values</h2>
            {Array.from(this.props.groups.priority).map(this.toValueComponent)}
          </section>
          <section className="col col--two">
            <h2>Your Top 10</h2>
            {Array.from(this.props.groups.top10).map(this.toValueComponent)}
          </section>
        </div>
        <Button
          nextStep={this.props.nextStep}
          top10={this.props.groups.top10}
        />
      </SectionStyles>
    );
  }
}

export default Top10;
