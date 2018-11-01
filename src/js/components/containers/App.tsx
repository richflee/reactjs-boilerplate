import * as React from "react";
import * as ReactDOM from "react-dom";

class App extends React.Component {
    constructor(props: any) {
        super(props);
        this.state = {
            title: ""
        };
    }
    render() {
        return (
            <h2>This is my react app!!!</h2>
        );
    }
}
export default App;