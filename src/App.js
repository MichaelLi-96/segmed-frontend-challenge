import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import { reportsChanged } from './actions';
import { reportsData } from './assets/reportsData';

//css
import "./App.css";

//screens
import Search from "./screens/search";
import Report from "./screens/report";

class App extends Component {
    componentDidMount() {
        const initialReports = [];
        for(let i = 1; i <= reportsData.length; i++) {
            initialReports.push(i);
        }
        this.props.reportsChanged(initialReports);
    }

    render() {
        return(
            <div id="app" tabIndex="0">
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

const mapStateToProps = state => ({ 
    reduxData: state.reduxData
});

export default connect(mapStateToProps, { 
    reportsChanged
})(App);
