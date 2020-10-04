import React, { Component } from "react";

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
                <Search />
            </div>
        );
    }
}

export default App;
