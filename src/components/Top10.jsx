import React, { Component } from "react";

import {
  ValueStyles,
  MainInputStyles,
  ButtonStyles,
  SectionStyles,
  ColumnContainerStyles,
  ColumnStyles,
} from "./styles";

class Value extends Component {
  state = {};
  getButton = () => {
    const groupNames = ["priority", "top10"];

    const result = groupNames.map((gn) => {
      if (this.props.groupName !== gn) {
        return (
          <ButtonStyles
            onClick={() => this.props.addToGroup(gn, this.props.value.key)}
          >
            Move
          </ButtonStyles>
        );
      } else {
        return <span></span>;
      }
    });

    return result;
  };
  render() {
    return (
      <ValueStyles>
        <h1>{this.props.value.key}</h1>
        {this.getButton()}
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
  toValueComponent = (curr, groupName) => {
    return (
      <Value
        value={this.props.values.find((v) => v.key === curr)}
        addToGroup={this.props.addToGroup}
        groupName={groupName}
      />
    );
  };
  render() {
    return (
      <SectionStyles>
        <h1>Refine</h1>
        <ColumnContainerStyles>
          <ColumnStyles>
            <h2>Your Most Important Values</h2>
            {Array.from(this.props.groups.priority).map((v) =>
              this.toValueComponent(v, "priority")
            )}
          </ColumnStyles>
          <ColumnStyles>
            <h2>Your Top 10</h2>
            {Array.from(this.props.groups.top10).map((v) =>
              this.toValueComponent(v, "top10")
            )}
          </ColumnStyles>
        </ColumnContainerStyles>
        <Button
          nextStep={this.props.nextStep}
          top10={this.props.groups.top10}
        />
      </SectionStyles>
    );
  }
}

export default Top10;
