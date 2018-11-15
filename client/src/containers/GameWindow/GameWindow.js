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

//Firebase Db stuff
const config = {
    apiKey: "AIzaSyD7UxJviUIXoSSfcmdUx-c13mEWbyEOXNY",
    authDomain: "texas-goat-em.firebaseapp.com",
    databaseURL: "https://texas-goat-em.firebaseio.com",
    projectId: "texas-goat-em",
    storageBucket: "texas-goat-em.appspot.com",
    messagingSenderId: "1083809629945"
};

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
            time: 15,
            lives: 3,
            isPressed:false,
            highscores: []
        };
    }

    componentWillMount() {
        const app = firebase.initializeApp(config);
        const db = app.database();
        this.setState({db: db});
    }

    getHand() {
        let hand = new Array(5),
            used = new Array(5),
            len = deck.length,
            n=0;
        while (n < 5) {
            let x = Math.floor(Math.random() * len);
            hand[n] = deck[x in used ? used[x] : x];
            used[x] = --len in used ? used[len] : len; //https://stackoverflow.com/questions/19269545/how-to-get-n-no-elements-randomly-from-an-array
            n++;
        }
        // this.setState({userHand: [hand[0],hand[1]], flop: [hand[2],hand[3],hand[4]]}, that.outsCounter());
        this.state.userHand = [hand[0], hand[1]];
        this.state.flop = [hand[2], hand[3], hand[4]];
        this.outsCounter();
    }

    outsCounter() {
        //get the values from the flop and user hand via this.state.flop and this.state.userHand
        //computes outs after hand is dealt
        var hand = [];
        hand.push(this.state.userHand[0], this.state.userHand[1], this.state.flop[0], this.state.flop[1], this.state.flop[2]);
        console.log(hand);
        this.state.outsValue = countOuts(hand).toString();
    }

    startTimer() {
        setInterval(this.tick, 1000);
    }

    tick = () => {
        if (this.state.time <= 0) {
            let outOfTime = window.confirm("You ran out of time! Try again");
            if(outOfTime === true){
                this.resetCards();
                this.decrementLives();
            }
        }
        let currentTime = this.state.time;
        this.setState({time: currentTime - 1});
    };

    //Resets the score to 0
    resetScore(){
        this.setState({currentScore: 0});
    }

    //Resets the lives to 3
    resetLives(){
        this.setState({lives: 3});
    }

    // Decrements lives by 1
    decrementLives(){
        this.state.lives --;
    }

    // Checks if the user still has lives
    stillLives(){
        return(this.state.lives > 0);
    }

    updateScores() {
        if(this.state.isPressed) {
            if (this.state.outsValue === this.state.inputValue) {
                let correctClick = window.confirm("Correct!");
                if(correctClick === true){
                    this.getHand();
                    this.setState({time: 15});
                }
                this.setState({currentScore: this.state.currentScore + 10});
                if (this.state.currentScore >= this.state.highScore) {
                    this.setState({highScore: this.state.highScore + 10});
                }

            }
            else {
                this.decrementLives();
                let inCorrectClick = window.confirm("Wrong! The correct answer is: " + this.state.outsValue);
                if(inCorrectClick === true && this.stillLives()){
                    this.getHand();
                    this.setState({time: 15});
                }
                else if (inCorrectClick === true && !this.stillLives()){
                    let lostClick = window.confirm("You lost! Do you want to try again?");
                    this.saveHighscore(this.state.currentScore);
                    if(lostClick === true){
                        this.resetCards();
                        this.resetLives();
                    }
                    else {
                        //show user a list of highscores and button to play again
                        this.resetScore();
                    }
                }
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
                highscores.push(score);
            })
            //sort highscores, set highscores state, show highscore board
        })
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

    resetCards(){
        this.resetScore();
        this.getHand();
        this.setState({time: 15});
    }


    render () {
        return (
            <div style={{width:"100%", height:"100%"}}>
                <NavBar />
                <Timer time={this.state.time}/>
                <Cards userHand={[this.state.userHand[0], this.state.userHand[1]]}
                       flop={[this.state.flop[0], this.state.flop[1], this.state.flop[2]]}/>
                <PlayButton buttonPressed={this.buttonPressed}/>
                <Score currentScore={this.state.currentScore} />
                <Input outsValue={this.state.outsValue} value={this.state.inputValue} changeHandler={this.handleInputChange} submitHandler={(e)=>{this.handleInputSubmit(e)}}/>
                <HighScore highScore={this.state.highScore} />
                <Lives lives = {this.state.lives}/>
            </div>
        )
    }
}

export default GameWindow;
