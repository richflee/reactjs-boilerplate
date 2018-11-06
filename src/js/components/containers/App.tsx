import * as React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Home from "./Home/Home";
import About from "./About/About";
import Contact from "./Contact/Contact";
require('./App.css')


interface AppComponentState {
    title: string
}
class App extends React.Component<any, AppComponentState> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: "React Boilerplate3000"
        };
    }
    render() {
        return (
            <Router>
                <div>
                    <h1>{this.state.title}</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/contact">Contact</Link>
                        </li>
                    </ul>

                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/contact" component={Contact} />
                </div>
            </Router>
        );
    }
}


export default App;