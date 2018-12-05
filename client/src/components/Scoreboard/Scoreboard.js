import React, { Component } from "react";
import { getDatabase } from "../../database/database";

class Scoreboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            highscores: []
        };
    };

    componentDidMount() {
        this.retrieveHighScores();
    }

    /**
     * Adds highscores to an array and sorts in descending order
     * Sets highscores state to array
     */
    retrieveHighScores(){
        let highscores = [];
        let that = this;
        let db = getDatabase();
        db.ref("highscores").once("value").then(function(snapshot) {
            snapshot.forEach((score) => {
                const dbScore = {
                    player: score.val().player,
                    score: score.val().score
                };
                let i = 0;
                let maxlen = 10;
                while (i < Math.min(highscores.length, maxlen)) { // with the help of Logan Caraco
                    if (highscores[i].score <= dbScore.score) { // adapted from: https://stackoverflow.com/questions/45147420/insert-object-into-array-at-specific-index-in-react
                        highscores = [
                            ...highscores.slice(0, i),
                            dbScore,
                            ...highscores.slice(i)
                        ];
                        highscores = highscores.slice(0, maxlen);
                        return;
                    }
                    i++;
                }
                highscores.push(dbScore);
                highscores = highscores.slice(0, maxlen);
            });
            that.setState({highscores: highscores.slice()});
        });
    }

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
            <h3 style = {{textAlign: "center"}}>High Scores</h3>
           <ol type = "1">
               {/*Converts highscore array into list to be displayed on scoreboard in format --> player name: score*/}
               {this.state.highscores.map(
                   highscore => (
                       <li style = {{textAlign: "left"}}>{highscore.player}: {highscore.score} </li>

               ))}
               </ol>

        </div>
        )
    }
}

export default Scoreboard;