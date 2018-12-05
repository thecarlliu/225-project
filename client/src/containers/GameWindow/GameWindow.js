import React, { Component } from "react";
import Timer from "../../components/Timer";
import Cards from "../../components/Cards";
import Score from "../../components/Score";
import Input from "../../components/Input";
import HighScore from "../../components/HighScore";
import NavBar from "../../components/NavBar";
import PlayButton from "../../components/PlayButton";
import countOuts from "../../algorithm/algorithm.js";
import { getDatabase } from "../../database/database";
import { changePage } from "../../components/NavButton/NavButton";
import Lives from "../../components/Lives";
import $ from "jquery";

import hand from "../../handCreator/handCreator.js"

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
            time: 15,
            lives: 3,
            isPressed:false,
            highscores: [],
            playerName: "",
            nameInput: "none",
            popUpShowing: "none",
            popUpButtonsShowing: "none",
            popUpCardsShowing: "none",
            popUpOptionOne: "",
            popUpOptionTwo: "",
            popUpText: "",
            scoreboard: "none",
            borderColor: "#0f0"
        };
    }

    componentWillMount() {
        getDatabase();
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
        this.state.outsValue = countOuts(hand)[0].toString();
    }

    startTimer() {
        tickingFunction = setInterval(this.tick, 1000);
    }

    tick = () => {
        if (this.state.time <= 0) {
          this.showPopUp("You ran out of time!", "Try again", "Quit");
          this.setState({borderColor: "#f00"})
        }
        else{
          let currentTime = this.state.time;
          this.setState({time: currentTime - 1});
        }
    };

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
        this.setState({popUpCardsShowing: "block"});
    }

    /**
     *
     */
    updateScores() {
        if(this.state.isPressed) {
                    if (this.state.inputValue !== "") {
                        if (this.state.outsValue === this.state.inputValue) {
                            this.showPopUp("Correct!", "Continue", "Quit");
                            $("#input-box").attr("disabled", "true");
                            this.setState({currentScore: this.state.currentScore + 10});
                            if (this.state.currentScore >= this.state.highScore) {
                                this.setState({highScore: this.state.highScore + 10});
                            }
                            this.setState({borderColor: "#0f0"});
                        }
                        else {
                            this.decrementLives();
                            this.showPopUp("Wrong! The correct answer is: " + countOuts(this.state.userHand + this.state.flop).toString(), "Continue", "Quit");
                            $("#input-box").attr("disabled", "true");
                            if (!this.stillLives()) {
                                this.showPopUp("You lost! Do you want to try again?", "Yes", "No");
                                // this.showHighscores();
                            }
                            this.setState({borderColor: "#f00"});
                            //show user a list of highscores and button to play again
                        }
                    }
        }
    }

    saveHighscore  = (score) => {
        const newScore = {
            score: score,
            player: this.state.playerName
        };
        getDatabase().ref("highscores").push(newScore);
    };

    handleInputSubmit = (event) => {
        event.preventDefault();
        this.updateScores();
        this.setState({inputValue:""});
    };

    handleInputChange = (value) => {
        this.setState({inputValue: value});
    };

    handleNameInputSubmit = (event) => {
        event.preventDefault();
        this.setState({playerName: ""});
        changePage(event, "/scoreboard");
        console.log(this.state.playerName);
    };

    handleNameInputChange = (name) => {
        this.setState({playerName: name.target.name});
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
            this.getHand();
            this.decrementLives();
        }
        if(this.stillLives()){
            this.getHand();
        }
        if(!this.stillLives()) {
            if(this.state.currentScore >= this.state.highscores.score){
                // this.showPopUp("Congrats! You're in the top 10! Save highscore?", "Yes", "No");
                // this.setState({nameInput: "block"});
                this.saveHighscore(this.state.currentScore);
            }
            this.resetScore();
            this.getHand();
            this.resetLives();
        }
        this.startTimer();
        this.setState({time: 15});

        $("#input-box").removeAttr("disabled");
        //cursor automatically brought to input
        $("#input-box").focus();
    };

    /**
     * Navigates back to the home page when popup option two is clicked
     * @param e
     */
    handleOptionTwo = (e) => {
        e.preventDefault();
        this.setState({popUpShowing: "none"});
        if(!this.stillLives()){
            this.showPopUp("Save highscore?", "Yes", "No");
            this.setState({nameInput: "block"});
            this.setState({popUpCardsShowing: "none"});
        }
        else{
            changePage(e, "/home");
        }
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
                    top: 135,
                    left: 0,
                    right: 0,
                    margin: "auto",
                    height: 280,
                    width: 300,
                    zIndex: 3,
                    display: this.state.popUpShowing,
                    boxShadow: "1px 1px 1px 1px #08415C",
                    borderRadius: "10px",
                    textAlign: "center",
                    fontSize: "large",
                    fontFamily: "Georgia",
                    color: "white",
                    padding: 20,
                    border: "5px solid" + this.state.borderColor,
                }}
                     className="primaryBg">
                    <b>{this.state.popUpText}</b>

                    <div>
                      <div class="trapezoidRight" style={{backgroundColor:this.state.borderColor}}></div>
                      <div class="trapezoidLeft" style={{backgroundColor:this.state.borderColor}}></div>
                    </div>

                    <div style={{
                      position: "absolute",
                      alignItems: "center",
                      top: 100,
                      left: 0,
                      right: 0,
                      margin: "auto",
                      display: this.state.popUpCardsShowing
                    }}>
                        <img src={"images/"+this.state.userHand[0]+".png"} style={{width: "40px", height: "60px", padding:"5px"}}/>
                        <img src={"images/"+this.state.userHand[1]+".png"} style={{width: "40px", height: "60px", padding:"5px"}}/>
                        <img src={"images/"+this.state.flop[0]+".png"} style={{width: "40px", height: "60px", padding:"5px"}}/>
                        <img src={"images/"+this.state.flop[1]+".png"} style={{width: "40px", height: "60px", padding:"5px"}}/>
                        <img src={"images/"+this.state.flop[2]+".png"} style={{width: "40px", height: "60px", padding:"5px"}}/>
                    </div>
                    <button className="primaryBg" style = {{position: "absolute", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", width: 150, height: 40, fontSize: "large", fontFamily: "Georgia", color: "white", bottom: 60, left: 0, right: 0, margin: "auto"}}
                            onClick={(e) => {this.handleOptionOne(e)}}>{this.state.popUpOptionOne}
                    </button>
                    <button className="primaryBg" style = {{position: "absolute", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", width: 150, height: 40, fontSize: "large", fontFamily: "Georgia", color: "white", bottom: 10, left: 0, right: 0, margin: "auto"}}
                            onClick={(e) => {this.handleOptionTwo(e)}}>{this.state.popUpOptionTwo}
                    </button>
                </div>
                    <div style = {{position: "absolute", width: "250px", display: this.state.nameInput, left: 0, right: 0, margin: "auto", top: "220px", borderRadius: "10px", height:"80px", fontFamily: "Georgia", fontSize: "large", textAlign: "center", lineHeight: "40px", zIndex: 4}}>
                        <form onSubmit={(e)=>{this.handleNameInputSubmit(e)}}>
                            <label>
                                <b>Name: </b><input type="text" value={this.state.value} onChange={(e)=>{this.handleNameInputChange(e)}} />
                            </label>
                            <input type="submit" value="Submit" />
                        </form>
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
