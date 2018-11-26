import React, { Component } from "react";

class Scoreboard extends Component {
    constructor(props){
        super(props);
    };
    render(){
        return (
        <div style = {{
            position: "absolute",
            alignItems: "center",
            top: 125,
            left: 0,
            right: 0,
            margin: "auto",
            height: 300,
            width: 300,
            zIndex: 3,
            display: this.props.scoreboard,
            boxShadow: "1px 1px 1px 1px #08415C",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "large",
            fontFamily: "Georgia",
            color: "white",
            padding: 20
        }} className="primaryBg">
            <h3>High Scores</h3>
            <list>{this.props.highscores}</list>

        </div>
        )
    }
}

export default Scoreboard;