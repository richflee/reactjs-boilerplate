import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends Component {
    constructor() {
        super();
        this.state = {
            title: ""
        };
    }
    render() {
        return (
            <h2>This is my react app!</h2>
        );
    }
}
export default App;