import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./js/components/containers/App";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
