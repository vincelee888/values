import React, { Component } from "react";
import { useLocation, Redirect } from "react-router-dom";

import CopyToClipboard from "react-copy-to-clipboard";

import Value from "./Value";
import { SectionStyles, ButtonStyles, MainInputStyles } from "./styles";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const MyValues = ({ values }) => {
  const myValues = useQuery()
    .get("values")
    .split(",")
    .map((k) => values.find((v) => v.key === k));

  const shareUrl = window.location.href;

  if (myValues[0] === undefined) {
    return <Redirect to="/" />;
  }

  return (
    <div>
      <h1>Your Core Values</h1>
      <p>You have defined your core Values at this point in time, to be:</p>
      {myValues.map((v) => {
        return <Value key={v.key} name={v.name} description={v.description} />;
      })}
      <h2>Share:</h2>
      <p>{shareUrl}</p>
      <CopyToClipboard text={shareUrl}>
        <ButtonStyles>Copy to clipboard</ButtonStyles>
      </CopyToClipboard>
    </div>
  );
};

class Share extends Component {
  state = {};
  render() {
    return (
      <SectionStyles>
        <MyValues values={this.props.values} />
        <MainInputStyles>
          <ButtonStyles onClick={() => (window.location.href = "/values")}>
            Try Again
          </ButtonStyles>
        </MainInputStyles>
      </SectionStyles>
    );
  }
}

export default Share;
