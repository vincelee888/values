import React, { Component } from "react";

class End extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Your Core Values</h1>
        <p>You have defined your core Values at this point in time, to be:</p>
        {Array.from(this.props.myValues).map((curr) => {
          const value = this.props.values.find((v) => v.key === curr);
          return (
            <div>
              <h2>{value.key}</h2>
              <p>{value.description}</p>
            </div>
          );
        })}
      </div>
    );
  }
}

export default End;
