import React, { Component } from "react";
import "./App.css";

import Group from "./components/Group";
import Top10 from "./components/Top10";
import Top3 from "./components/Top3";
import End from "./components/End";

import values from "./data/values";
import {
  ButtonStyles,
  MainInputStyles,
  SectionStyles,
} from "./components/styles";

import { shuffle } from "./helpers/array";
import { AppStyles } from "./components/styles";

function StageSelect(props) {
  const {
    values,
    groups,
    nextStep,
    addToGroup,
    moveToTop,
    moveUp,
    moveDown,
  } = props;

  const stages = {
    intro: (
      <SectionStyles>
        <h1>Value-Driven Decision Making</h1>
        <p>
          During stressful times, we often allow an automatic reaction take
          control, and lead us into an undesirable outcome. By identifying our
          core values or qualities that are important to us, and keeping those
          in mind throughout the day, we can take actions that embody and fulfil
          these values, leading us down a more beneficial and fulfilling path.
        </p>
        <p>This app seeks to help you discover your own personal values.</p>
        <MainInputStyles>
          <ButtonStyles onClick={() => nextStep()}>Start</ButtonStyles>
        </MainInputStyles>
      </SectionStyles>
    ),
    "group-desc": (
      <SectionStyles>
        <h1>Prioritise</h1>
        <p>
          To begin, we'll go through a number of Values. For each Value that
          appears, rank it as to how important it is to you.
        </p>
        <p>
          Don't worry too much if the description is seems ambiguous or similar
          to a previous one, just go with how you interpret it.
        </p>
        <MainInputStyles>
          <ButtonStyles onClick={() => nextStep()}>Next</ButtonStyles>
        </MainInputStyles>
      </SectionStyles>
    ),
    group: (
      <Group values={values} nextStep={nextStep} addToGroup={addToGroup} />
    ),
    "top10-desc": (
      <SectionStyles>
        <h1>Refine</h1>
        <p>
          Next, we'll refine the Values that most resonate with you, down to 10.
        </p>
        <MainInputStyles>
          <ButtonStyles onClick={() => nextStep()}>Next</ButtonStyles>
        </MainInputStyles>
      </SectionStyles>
    ),
    top10: (
      <Top10
        groups={groups}
        values={values}
        nextStep={nextStep}
        addToGroup={addToGroup}
      ></Top10>
    ),
    "top3-desc": (
      <SectionStyles>
        <h1>Define</h1>
        <p>Finally, we'll rank your top 10, to define your 3 core values.</p>
        <MainInputStyles>
          <ButtonStyles onClick={() => nextStep()}>Next</ButtonStyles>
        </MainInputStyles>
      </SectionStyles>
    ),
    top3: (
      <Top3
        top10={groups.top10}
        values={values}
        moveToTop={moveToTop}
        moveUp={moveUp}
        moveDown={moveDown}
        nextStep={nextStep}
      ></Top3>
    ),
    end: (
      <End
        myValues={Array.from(groups.top10).slice(0, 3)}
        values={values}
      ></End>
    ),
  };

  return stages[
    Object.keys(stages).find((k) => k === props.stages[props.stageIndex])
  ];
}

class App extends Component {
  state = {
    stages: [
      "intro",
      "group-desc",
      "group",
      "top10-desc",
      "top10",
      "top3-desc",
      "top3",
      "end",
    ],
    stageIndex: 0,
    values: shuffle(values),
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
      <AppStyles>
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
      </AppStyles>
    );
  }
}

export default App;
