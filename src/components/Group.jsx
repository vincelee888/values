import React, { Component } from "react";

function Value(props) {
  if (props.isFinished) {
    return <button onClick={() => props.nextStep()}>Next</button>;
  } else {
    return (
      <div>
        <h2>{props.valueKey}</h2>
        <p>{props.desc}</p>
        <div>
          <h3>This Value is:</h3>
          <button onClick={() => props.addToGroup("priority")}>
            very important to me
          </button>
          <button onClick={() => props.addToGroup("important")}>
            quite important to me
          </button>
          <button onClick={() => props.addToGroup("unimportant")}>
            not important to me
          </button>
        </div>
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
      <div>
        <h1>Prioritise</h1>
        <p>
          Press the button that best describes how each Value relates to you.
        </p>
        <Value
          addToGroup={this.addToGroup}
          nextStep={this.props.nextStep}
          isFinished={this.state.isFinished}
          valueKey={this.props.values[this.state.index].key}
          desc={this.props.values[this.state.index].description}
        />
      </div>
    );
  }
}

export default Group;
