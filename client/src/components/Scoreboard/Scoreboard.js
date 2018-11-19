import React, { Component } from "react";

class Scoreboard extends Component {
    constructor(props){
        super(props);
    };
    render(){
        return(
        <div style = {{
            position: "absolute",
            alignItems: "center",
            top: 200,
            left: 0,
            right: 0,
            margin: "auto",
            height: 250,
            width: 300,
            zIndex: 3,
            display: this.state.scoreboardShowing,
            boxShadow: "1px 1px 1px 1px #08415C",
            borderRadius: "10px",
            textAlign: "center",
            fontSize: "large",
            fontFamily: "Georgia",
            color: "white",
            padding: 20
        }} className="primaryBg">
            <ul>{this.state.highscores}</ul>

        </div>
        )
    }
}

export default Scoreboard;