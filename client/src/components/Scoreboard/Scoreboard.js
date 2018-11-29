import React, { Component } from "react";

class Scoreboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            highscores: [],
            scoreboard: "none"
        }
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
            textAlign: "left",
            fontSize: "large",
            fontFamily: "Georgia",
            color: "white",
            padding: 20
        }} className="primaryBg">
            <h3 style = {{textAlign: "center"}}>High Scores</h3>
           <ol>
               <li>{this.state.highscores}</li>
               <li>{this.props.highscores}</li>
               <li>{this.props.highscores}</li>
               <li>{this.props.highscores}</li>
               <li>{this.props.highscores}</li>
               <li>{this.props.highscores}</li>
               <li>{this.props.highscores}</li>
               <li>{this.props.highscores}</li>
               <li>{this.props.highscores}</li>
               <li>{this.props.highscores}</li>
               </ol>

        </div>
        )
    }
}

export default Scoreboard;