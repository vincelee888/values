import React, { Component, useEffect } from "react";

import Value from "./Value";
import { ButtonStyles, MainInputStyles, SectionStyles } from "./styles";

function Values(props) {
  const { isFinished, name, desc, addToGroup, nextStep } = props;

  const handleKeyPress = (keyPressEvent) => {
    const key = keyPressEvent.key
    console.log({key})

    const keyPressActions = {
      '1': 'priority',
      '2': 'important',
      '3': 'unimportant'
    }

    const action = keyPressActions[key]

    if(!isFinished && action) {
      addToGroup(action)
    }
  }

  useEffect(() => {
    const args = ['keydown', handleKeyPress, false]

    document.addEventListener(...args)

    return () => {
      document.removeEventListener(...args)
    }
  })

  if (isFinished) {
    return (
      <MainInputStyles>
        <ButtonStyles onClick={() => nextStep()}>Next</ButtonStyles>
      </MainInputStyles>
    );
  } else {
    return (
      <div>
        <Value name={name} description={desc} />
        <MainInputStyles>
          <ButtonStyles onClick={() => addToGroup("priority")}>
            very important to me (1)
          </ButtonStyles>
          <ButtonStyles onClick={() => addToGroup("important")}>
            quite important to me (2)
          </ButtonStyles>
          <ButtonStyles onClick={() => addToGroup("unimportant")}>
            not important to me (3)
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
          name={this.props.values[this.state.index].name}
          desc={this.props.values[this.state.index].description}
        />
      </SectionStyles>
    );
  }
}

export default Group;
