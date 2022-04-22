import React, { Component } from "react";
import { Redirect } from "react-router-dom";

import Value from "./Value";
import { SectionStyles, ButtonStyles, MainInputStyles } from "./styles";

const MyValues = ({ values, myValues }) => {
  if (myValues[0] === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Your Core Values</h1>
      <p>You have defined your core Values at this point in time, to be:</p>
      {myValues.map((mv) => {
        const v = values.find((v) => v.key === mv);
        return <Value key={v.key} name={v.name} description={v.description} />;
      })}
      <p>
        Armed with your core Values, you might like to look into{" "}
        <a href="https://en.wikipedia.org/wiki/Acceptance_and_commitment_therapy">
          ACT training
        </a>
        , to learn how you can steer your actions towards more desirable
        outcomes.
      </p>
    </div>
  );
};

class End extends Component {
  state = {};
  render() {
    return (
      <SectionStyles>
        <MyValues values={this.props.values} myValues={this.props.myValues} />
        <MainInputStyles>
          <ButtonStyles onClick={() => (window.location.href = "/values")}>
            Try Again
          </ButtonStyles>
        </MainInputStyles>
      </SectionStyles>
    );
  }
}

export default End;
