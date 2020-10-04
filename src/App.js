import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


//css
import "./App.css";

//screens
import Search from "./screens/search/index.js";
import Report from "./screens/report/index.js";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
        }
    }

    render() {
        return(
            <div id="app">
                <div id="appTitle">GMail for Medical Reports</div>
                <Router>
                    <Switch>
                        <Route exact path='/' component={Search} />
                        <Route exact path='/report' component={Report} />
                    </Switch>
                </Router>
            </div>
        );
    }
}

export default App;
