// var React = require('react');
// var ReactDOM = require('react-dom');
// var {Route, Router, IndexRoute, hashHistory} = require('react-router');

// // load foundation
// $(document).foundation();

// // App css
// require('style!css!sass!applicationStyles')

// ReactDOM.render(
//   <p>Boilerplate3 Project</p>,
// document.getElementById('app'));

import React from 'react';
import ReactDOM from 'react-dom';
import App from "./js/components/containers/App";

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
