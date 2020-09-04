import React, { Component } from "react";
import { useLocation, Redirect } from "react-router-dom";

import CopyToClipboard from "react-copy-to-clipboard";

import Value from "./Value";
import { SectionStyles, ButtonStyles, MainInputStyles } from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MyValues = ({ values, myValues }) => {
  const sharePath = `share?values=${myValues.join(",")}`;
  const shareUrl = `${window.location.href}${sharePath}`;

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
          <ButtonStyles onClick={() => (window.location.href = "/")}>
            Try Again
          </ButtonStyles>
        </MainInputStyles>
      </SectionStyles>
    );
  }
}

export default End;
