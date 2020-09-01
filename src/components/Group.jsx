import React, { Component } from "react";

import Value from "./Value";
import { ButtonStyles, MainInputStyles, SectionStyles } from "./styles";

function Values(props) {
  const { isFinished, valueKey, desc, addToGroup, nextStep } = props;

  if (isFinished) {
    return (
      <MainInputStyles>
        <ButtonStyles onClick={() => nextStep()}>Next</ButtonStyles>
      </MainInputStyles>
    );
  } else {
    return (
      <div>
        <Value name={valueKey} description={desc} />
        <MainInputStyles>
          <ButtonStyles onClick={() => addToGroup("priority")}>
            very important to me
          </ButtonStyles>
          <ButtonStyles onClick={() => addToGroup("important")}>
            quite important to me
          </ButtonStyles>
          <ButtonStyles onClick={() => addToGroup("unimportant")}>
            not important to me
          </ButtonStyles>
        </MainInputStyles>
      </div>
    );
  }
}

class Group extends Component {
  state = {
    index: 0,
    isFinished: false,
  };
  addToGroup = (priority) => {
    this.props.addToGroup(priority, this.props.values[this.state.index].key);
    const index = this.state.index + 1;
    this.setState({ index });
    if (index === this.props.values.length - 1) {
      this.setState({ isFinished: true });
    }
  };
  render() {
    return (
      <SectionStyles>
        <h1>Prioritise</h1>
        <p>
          Press the button that best describes how each Value relates to you.
        </p>
        <Values
          addToGroup={this.addToGroup}
          nextStep={this.props.nextStep}
          isFinished={this.state.isFinished}
          valueKey={this.props.values[this.state.index].key}
          desc={this.props.values[this.state.index].description}
        />
      </SectionStyles>
    );
  }
}

export default Group;
