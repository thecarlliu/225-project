import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Rules from "./pages/Rules";
import NoMatch from "./pages/NoMatch";

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/home"/>
                )} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/rules" component={Rules} />
                <Route component={NoMatch} />
            </Switch>
        )
    }
}

export default Routes;
