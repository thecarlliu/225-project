import React, { Component } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Practice from "./pages/Practice";
import About from "./pages/About";
import Rules from "./pages/Rules";
import NoMatch from "./pages/NoMatch";
import ScoreBoard from "./pages/ScoreBoard";

class Routes extends Component {

    render() {
        return (
            <Switch>
                <Route exact path="/" render={() => (
                    <Redirect to="/home"/>
                )} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/game" component={Game} />
                <Route exact path="/practice" component={Practice} />
                <Route exact path="/about" component={About} />
                <Route exact path="/rules" component={Rules} />
                <Route exact path="/scoreboard" component={ScoreBoard}/>
                <Route component={NoMatch} />
            </Switch>
        )
    }
}

export default Routes;
