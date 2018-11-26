import React, { Component } from "react";
import Timer from "../../components/Timer";
import Cards from "../../components/Cards";
import Score from "../../components/Score";
import Input from "../../components/Input";
import HighScore from "../../components/HighScore";
import NavBar from "../../components/NavBar";
import PlayButton from "../../components/PlayButton";
import countOuts from "../../algorithm/algorithm.js";
import firebase from "firebase";
import Lives from "../../components/Lives";

import hand from "../../handCreator/handCreator.js"

//Firebase Db stuff
const config = {
    apiKey: "AIzaSyD7UxJviUIXoSSfcmdUx-c13mEWbyEOXNY",
    authDomain: "texas-goat-em.firebaseapp.com",
    databaseURL: "https://texas-goat-em.firebaseio.com",
    projectId: "texas-goat-em",
    storageBucket: "texas-goat-em.appspot.com",
    messagingSenderId: "1083809629945"
};

// Variable so timer can be paused
let tickingFunction = 0;

const deck = ["AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH",
    "AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS",
    "AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
    "AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC"];

//The GameWindow keeps track of the state of the game.
class GameWindow extends Component {

    constructor(props){
        super(props);
        this.state={
            userHand: ["",""],
            flop: ["","",""],
            inputValue: "",
            currentScore: 0,
            highScore: 0,
            outsValue: "",
            rightAnswerInfo: "",
            time: 15,
            lives: 3,
            isPressed:false,
            highscores: [],
            playerName: "",
            popUpShowing: "none",
            popUpButtonsShowing: "none",
            popUpOptionOne: "",
            popUpOptionTwo: "",
            popUpText: "",
            scoreboardShowing: "none"
        };
    }

    componentWillMount() {
        const app = firebase.initializeApp(config);
        const db = app.database();
        this.setState({db: db});
    }




    getHand() {
      let userHand = hand();
      this.state.userHand = [userHand[0], userHand[1]];
      this.state.flop = [userHand[2], userHand[3], userHand[4]];
      this.outsCounter();
    }

    outsCounter() {
        //get the values from the flop and user hand via this.state.flop and this.state.userHand
        //computes outs after hand is dealt
        var hand = [];
        hand.push(this.state.userHand[0], this.state.userHand[1], this.state.flop[0], this.state.flop[1], this.state.flop[2]);
        console.log(hand);
        var result = countOuts(hand);
        this.state.outsValue = result[0].toString();
        this.state.rightAnswerInfo = result[1];
    }

    startTimer() {
        tickingFunction = setInterval(this.tick, 1000);
    }

    tick = () => {
        if (this.state.time <= 0) {
            this.showPopUp("You ran out of time!", "Try again", "Quit");
        }
        let currentTime = this.state.time;
        this.setState({time: currentTime - 1});
    };

    /**
     * Navigates back to a page
     * @param e event triggering page change
     * @param route page going to
     */
    changePage(e, route) {
        e.preventDefault();
        window.location.href = route;
    }

    /**
     * Resets the score to 0
     */
    resetScore(){
        this.setState({currentScore: 0});
    }

    /**
     * Resets the lives to 3
     */
    resetLives(){
        this.setState({lives: 3});
    }

    /**
     * Decrements lives by 1
     */
    decrementLives(){
        this.state.lives --;
    }

    /**
     * Checks if the user still has lives
     */
    stillLives(){
        return(this.state.lives > 0);
    }

    /**
     * Displays the popup and pauses the timer
     * @param text feedback
     * @param option1 button text
     * @param option2 button text
     */
    showPopUp(text, option1, option2){
        this.setState({popUpShowing: "block"});
        this.setState({popUpButtonsShowing: "block"});
        clearInterval(tickingFunction);
        this.setState({popUpText: text});
        this.setState({popUpOptionOne: option1});
        this.setState({popUpOptionTwo: option2});
    }

    updateScores() {
        if(this.state.isPressed) {
            if (this.state.outsValue === this.state.inputValue) {
                this.showPopUp("Correct!", "Continue", "Quit");
                this.setState({currentScore: this.state.currentScore + 10});
                if (this.state.currentScore >= this.state.highScore) {
                    this.setState({highScore: this.state.highScore + 10});
                }
            }
            else {
                this.decrementLives();
                this.showPopUp("Wrong! The correct answer is: " + this.state.outsValue + ". There was " + this.state.rightAnswerInfo + ".", "Continue", "Quit");
                if(!this.stillLives()){
                    this.showPopUp("You lost! Do you want to try again?", "Yes", "No");
                    this.setState({popUpShowing: "none"});
                    console.log(this.state.highscores);
                    this.showHighscores();
                }
                        //show user a list of highscores and button to play again
                this.resetScore();
                }
            }
        }

    saveHighscore  = (score) => {
        const newScore = {
            score: score,
            player: "Billy"
        };
        this.state.db.ref("highscores").push(newScore);
    };

    showHighscores() {
        const highscores = [];
        this.state.db.ref("highscores").once("value").then(function(snapshot) {
            snapshot.forEach((score) => {
                const dbScore = {
                    player: score.val().player,
                    score: score.val().score
                };
                highscores.push(dbScore);
            })
            //sort highscores, set highscores state, show highscore board
        });
        highscores.sort(function(a, b){return a - b});
        this.setState({highscores: highscores});
        this.setState({scoreboardShowing: "block"});
    }

    handleInputSubmit = (event) => {
        event.preventDefault();
        this.updateScores();
        this.setState({inputValue:""});
    };

    handleInputChange = (value) => {
        this.setState({inputValue: value});
    };

    buttonPressed = () => {
        this.setState({isPressed:true});
        this.getHand();
        this.startTimer();
    };

    /**
     * Resets game state and  timer when popup option one is clicked
     * If out of time, resets score and hand, decrements lives
     * If the user has lost (out of lives), saves highscore and resets score, hand, and lives
     * @param e
     */
    handleOptionOne = (e) => {
        e.preventDefault();
        this.setState({popUpShowing: "none"});
        if(this.state.time <= 0){
            this.resetScore();
            this.getHand();
            this.decrementLives();
        }
        if(this.stillLives()){
            this.getHand();
        }
        if(!this.stillLives()) {
            this.saveHighscore(this.state.currentScore);
            this.resetScore();
            this.getHand();
            this.resetLives();
        }
        this.startTimer();
        this.setState({time: 15});
    };

    /**
     * Navigates back to the home page when popup option two is clicked
     * @param e
     */
    handleOptionTwo = (e) => {
        e.preventDefault();
        this.setState({popUpShowing: "none"});
        this.changePage(e, "/home");
    };


    render () {
        return (
            <div style={{width:"100%", height:"100%", color:"white"}}>
                <NavBar />
                <Timer time={this.state.time}/>
                <Cards userHand={[this.state.userHand[0], this.state.userHand[1]]}
                       flop={[this.state.flop[0], this.state.flop[1], this.state.flop[2]]}/>
                <PlayButton buttonPressed={this.buttonPressed}/>
                <Score currentScore={this.state.currentScore} />
                <Input outsValue={this.state.outsValue} value={this.state.inputValue} changeHandler={this.handleInputChange} submitHandler={(e)=>{this.handleInputSubmit(e)}}/>
                <HighScore highScore={this.state.highScore} />
                <Lives lives = {this.state.lives}/>
                {/*//popup*/}
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
                    display: this.state.popUpShowing,
                    boxShadow: "1px 1px 1px 1px #08415C",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontSize: "large",
                    fontFamily: "Georgia",
                    color: "white",
                    padding: 20
                }}
                     className="primaryBg">
                    <b>{this.state.popUpText}</b>
                    <button className="primaryBg" style = {{position: "absolute", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", width: 150, height: 40, fontSize: "large", fontFamily: "Georgia", color: "white", bottom: 60, left: 0, right: 0, margin: "auto"}}
                            onClick={(e) => {this.handleOptionOne(e)}}>{this.state.popUpOptionOne}
                    </button>
                    <button className="primaryBg" style = {{position: "absolute", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", width: 150, height: 40, fontSize: "large", fontFamily: "Georgia", color: "white", bottom: 10, left: 0, right: 0, margin: "auto"}}
                            onClick={(e) => {this.handleOptionTwo(e)}}>{this.state.popUpOptionTwo}
                    </button>
                </div>
                    <div style={{position: "relative", display: this.state.popUpButtonsShowing}}>
                        <button className="primaryBg" style = {{position: "absolute", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", width: 150, height: 40, fontSize: "large", fontFamily: "Georgia", color: "white", bottom: 60, left: 0, right: 0, margin: "auto"}}
                                onClick={(e) => {this.handleOptionOne(e)}}>{this.state.popUpOptionOne}
                        </button>
                        <button className="primaryBg" style = {{position: "absolute", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", width: 150, height: 40, fontSize: "large", fontFamily: "Georgia", color: "white", bottom: 10, left: 0, right: 0, margin: "auto"}}
                                onClick={(e) => {this.handleOptionTwo(e)}}>{this.state.popUpOptionTwo}
                        </button>
                    </div>
                </div>
        )
    }
}

export default GameWindow;
