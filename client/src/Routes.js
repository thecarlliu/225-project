import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import NoMatch from "./pages/NoMatch";

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/home"/>
                )} />
                <Route exact path="/home" component={Home} />
                <Route component={NoMatch} />
            </Switch>
        )
    }
}

export default Routes;
