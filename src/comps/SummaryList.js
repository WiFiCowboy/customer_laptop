import React, { Component } from "react";
import Total from "./Total";

export default class Summary extends Component {
  render() {
    const total = Object.keys(this.props.selected).reduce(
      (acc, curr) => acc + this.props.selected[curr].cost,
      0
    );

    return (
      <section className="main__summary">
        <h2>Your cart</h2>
        <Total 
          selected={this.props.selected}
          usCurrency={this.props.usCurrency}
        />
        <div className="summary__total">
          <div className="summary__total__label">Total</div>
          <div className="summary__total__value">
            ${total}
          </div>
        </div>
      </section>
    );
  }
}
