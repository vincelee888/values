import React, { Component } from "react";

class Top3 extends Component {
  state = {};
  render() {
    return (
      <div>
        <h1>Top3</h1>
        {Array.from(this.props.top10).map((curr) => {
          const value = this.props.values.find((v) => v.key === curr);
          return (
            <div>
              <h2>{value.key}</h2>
              <p>{value.description}</p>
              <button onClick={() => this.props.moveToTop("top10", value.key)}>
                Move to Top
              </button>
              <button onClick={() => this.props.moveUp("top10", value.key)}>
                Move Up
              </button>
              <button onClick={() => this.props.moveDown("top10", value.key)}>
                Move Down
              </button>
            </div>
          );
        })}
        <button onClick={() => this.props.nextStep()}>Finish</button>
      </div>
    );
  }
}

export default Top3;
