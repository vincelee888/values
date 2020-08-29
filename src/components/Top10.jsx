import React, { Component } from "react";

class Value extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <div>
        <h1>{this.props.value.key}</h1>
        <p>{this.props.value.description}</p>
        <button
          onClick={() =>
            this.props.addToGroup("priority", this.props.value.key)
          }
        >
          &lt;
        </button>
        <button
          onClick={() => this.props.addToGroup("top10", this.props.value.key)}
        >
          &gt;
        </button>
      </div>
    );
  }
}
class Button extends Component {
  state = {};
  render() {
    if (this.props.top10.size === 10) {
      return <button onClick={() => this.props.nextStep()}>Next</button>;
    } else {
      return <span></span>;
    }
  }
}

class Top10 extends Component {
  toValueComponent = (curr) => {
    return (
      <Value
        value={this.props.values.find((v) => v.key === curr)}
        addToGroup={this.props.addToGroup}
      />
    );
  };
  render() {
    return (
      <div>
        <h1>Refine</h1>
        <div className="columns">
          <section className="col col--two">
            <h2>Your Most Important Values</h2>
            {Array.from(this.props.groups.priority).map(this.toValueComponent)}
          </section>
          <section className="col col--two">
            <h2>Your Top 10</h2>
            {Array.from(this.props.groups.top10).map(this.toValueComponent)}
          </section>
        </div>
        <Button
          nextStep={this.props.nextStep}
          top10={this.props.groups.top10}
        />
      </div>
    );
  }
}

export default Top10;
