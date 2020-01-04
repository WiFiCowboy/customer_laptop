import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import FEATURES from "./FEATURES";
import "./index.css";

ReactDOM.render(<App features={FEATURES} />, document.getElementById("root"));
