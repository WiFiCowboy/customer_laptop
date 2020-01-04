import React, { Component } from "react";
import CustomItem from "./CustomItem";

export default class CustomList extends Component {
  render() {
    return (
      <form className="main__form">
        <h2>Customize your laptop</h2>
        <CustomItem
          features={this.props.features}
          updateFeature={this.props.updateFeature}
          selected={this.props.selected}
          usCurrency={this.props.usCurrency}
        />
      </form>
    );
  }
}
