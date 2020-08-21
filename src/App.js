import React, { Component } from "react";
import "./App.css";

import Intro from "./components/Intro";
import Group from "./components/Group";

function StageSelect(props) {
  const stages = {
    intro: <Intro nextStep={props.nextStep} />,
    group: (
      <Group
        values={props.values}
        nextStep={props.nextStep}
        addToGroup={props.addToGroup}
      />
    ),
  };

  return stages[Object.keys(stages).find((k) => k === props.stage)];
}

class App extends Component {
  state = {
    stage: "intro",
    values: [
      { key: "a", desc: "ajawiofawje" },
      { key: "b", desc: "ajawiofawje" },
      { key: "c", desc: "ajawiofawje" },
      { key: "d", desc: "ajawiofawje" },
      { key: "e", desc: "ajawiofawje" },
      { key: "f", desc: "ajawiofawje" },
      { key: "g", desc: "ajawiofawje" },
      { key: "h", desc: "ajawiofawje" },
      { key: "i", desc: "ajawiofawje" },
      { key: "j", desc: "ajawiofawje" },
    ],
    groups: {
      priority: [],
      important: [],
      unimportant: [],
    },
  };

  nextStep = () => {
    this.setState({ stage: "group" });
  };

  addToGroup = (groupName, valueKey) => {
    const groups = this.state.groups;
    groups[groupName].push(valueKey);
    this.setState({ groups });
  };

  render() {
    return (
      <div className="App">
        <StageSelect
          stage={this.state.stage}
          values={this.state.values}
          nextStep={this.nextStep}
          addToGroup={this.addToGroup}
        />
      </div>
    );
  }
}

export default App;
