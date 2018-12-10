import React, { Component } from "react";
import { getDatabase } from "../../database/database";
import Input from "../../components/Input";

/**
 * Sets up and displays the high score list
 * Allows the player to add their own high score
 */
class Scoreboard extends Component {
    constructor(props){
        super(props);
        this.state = {
            highscores: [],
            player: "",
            popUpShowing: "block",
            currentScore: sessionStorage.getItem("currentScore")
        };
    };

    /**
     * Loads the sorted highscores
     */
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

    /**
     * Adds the current highscore to the database with the input name
     */
    saveHighscore  = (score) => {
        const newScore = {
            score: score,
            player: this.state.player
        };
        getDatabase().ref("highscores").push(newScore);
        console.log(newScore);
    };

    /**
     * Saves the highscore once the user inputs their name
     * Hides the popup and clears the stored score
     */
    handleNameInputSubmit = (event) => {
        event.preventDefault();
        this.saveHighscore(this.state.currentScore);
        this.setState({player: ""});
        this.setState({popUpShowing: "none"});
        sessionStorage.clear();
    };

    /**
     * Sets the player state to the name the user inputs
     */
    handleNameInputChange = (player) => {
        this.setState({player: player});
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
            <div style = {{
                position: "absolute",
                alignItems: "center",
                top: 50,
                left: 0,
                right: 0,
                margin: "auto",
                height: 150,
                width: 200,
                zIndex: 3,
                display: this.state.popUpShowing,
                boxShadow: "1px 1px 1px 1px #08415C",
                borderRadius: "10px",
                textAlign: "center",
                fontSize: "large",
                fontFamily: "Georgia",
                color: "white",
                padding: 20,
                border: "5px solid"
            }}
                 className="primaryBg">
                <b>Highscore: {this.state.currentScore}<br/>
                    Save?
                </b>
                <Input label = {this.state.label = "Name: "} value={this.state.player} changeHandler={this.handleNameInputChange} submitHandler={(e)=>{this.handleNameInputSubmit(e)}} width = {this.state.width = "205px"} topPos = {this.state.topPos = "65px"}/>
            </div>

        </div>
        )
    }
}

export default Scoreboard;