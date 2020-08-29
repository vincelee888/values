import React, { Component } from "react";
import "./App.css";

import Intro from "./components/Intro";
import Group from "./components/Group";
import Top10 from "./components/Top10";
import Top3 from "./components/Top3";
import End from "./components/End";

import values from "./data/values";

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
    top10: (
      <Top10
        groups={props.groups}
        values={props.values}
        nextStep={props.nextStep}
        addToGroup={props.addToGroup}
      ></Top10>
    ),
    top3: (
      <Top3
        top10={props.groups.top10}
        values={props.values}
        moveToTop={props.moveToTop}
        moveUp={props.moveUp}
        moveDown={props.moveDown}
        nextStep={props.nextStep}
      ></Top3>
    ),
    end: (
      <End
        myValues={Array.from(props.groups.top10).slice(0, 3)}
        values={props.values}
      ></End>
    ),
  };

  return stages[
    Object.keys(stages).find((k) => k === props.stages[props.stageIndex])
  ];
}

class App extends Component {
  state = {
    stages: ["intro", "group", "top10", "top3", "end"],
    stageIndex: 0,
    values,
    groups: {
      priority: new Set(),
      important: new Set(),
      unimportant: new Set(),
      top10: new Set(),
    },
  };

  nextStep = () => {
    const stageIndex = this.state.stageIndex;
    this.setState({ stageIndex: stageIndex + 1 });
  };

  addToGroup = (groupName, valueKey) => {
    if (!this.state.groups[groupName].has(valueKey)) {
      const groups = this.state.groups;

      Object.keys(groups).forEach((g) => groups[g].delete(valueKey));

      groups[groupName].add(valueKey);

      this.setState({ groups });
    }
  };

  moveToTop = (groupName, valueKey) => {
    const asArray = Array.from(this.state.groups[groupName]);
    const indexOfValueToMove = asArray.indexOf(valueKey);

    if (indexOfValueToMove === 0) return;

    const left = asArray.slice(0, indexOfValueToMove);
    const right = asArray.slice(indexOfValueToMove);
    const reordered = [valueKey, ...left, ...right];

    const groups = this.state.groups;

    groups[groupName] = new Set(reordered);

    this.setState({ groups });
  };

  moveUp = (groupName, valueKey) => {
    const asArray = Array.from(this.state.groups[groupName]);
    const indexOfValueToMove = asArray.indexOf(valueKey);

    if (indexOfValueToMove === 0) return;

    const left = asArray.slice(0, indexOfValueToMove - 1);
    const toSwapWith = asArray[indexOfValueToMove - 1];
    const right = asArray.slice(indexOfValueToMove);
    const reordered = [...left, valueKey, toSwapWith, ...right];

    const groups = this.state.groups;

    groups[groupName] = new Set(reordered);

    this.setState({ groups });
  };

  moveDown = (groupName, valueKey) => {
    const asArray = Array.from(this.state.groups[groupName]);
    const indexOfValueToMove = asArray.indexOf(valueKey);

    if (indexOfValueToMove === asArray.length - 1) return;

    const left = asArray.slice(0, indexOfValueToMove);
    const toSwapWith = asArray[indexOfValueToMove + 1];
    const right = asArray.slice(indexOfValueToMove + 1);
    const reordered = [...left, toSwapWith, valueKey, ...right];

    const groups = this.state.groups;

    groups[groupName] = new Set(reordered);

    this.setState({ groups });
  };

  render() {
    return (
      <div className="App">
        <StageSelect
          stages={this.state.stages}
          stageIndex={this.state.stageIndex}
          values={this.state.values}
          groups={this.state.groups}
          nextStep={this.nextStep}
          addToGroup={this.addToGroup}
          moveUp={this.moveUp}
          moveDown={this.moveDown}
          moveToTop={this.moveToTop}
        />
      </div>
    );
  }
}

export default App;
