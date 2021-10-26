import React from "react";
import ReactDOM from "react-dom";

import Recording from "@grupoboticario/flora-screenrecording-addon";

Recording.init({
  timeout: 5000,
});

import App from "./app";

ReactDOM.render(<App />, document.getElementById("root"));
