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
            popUpShowing: "none",
            popUpButtonsShowing: "none",
            popUpCardsShowing: "none",
            popUpOptionOne: "",
            popUpOptionTwo: "",
            popUpText: "",
            borderColor: "#0f0"
        };
    }

    componentWillMount() {
        getDatabase();
    }

    getHand() {
      let thisHand = hand();
      this.setState({userHand:[thisHand[0], thisHand[1]]});
      this.setState({flop:[thisHand[2], thisHand[3], thisHand[4]]});
      this.outsCounter();
    }

    outsCounter() {
        //get the values from the flop and user hand via this.state.flop and this.state.userHand
        //computes outs after hand is dealt
        var hand = [];
        hand.push(this.state.userHand[0], this.state.userHand[1], this.state.flop[0], this.state.flop[1], this.state.flop[2]);
        console.log(hand);

        this.setState({outsValue:countOuts(hand)[0].toString()});
        this.setState({rightAnswerInfo:countOuts(hand)});

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
     * Gives feedback on the user input (displays popup)
     * Increments score by 10 if user inputs correct answer and updates highscore accordingly
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
                            this.showPopUp("Wrong! The correct answer is: " + this.state.rightAnswerInfo.toString(), "Continue", "Quit");
                            $("#input-box").attr("disabled", "true");
                            if (!this.stillLives()) {
                                this.showPopUp("Wrong! The correct answer is: " + this.state.rightAnswerInfo.toString()+". You lost! Do you want to try again?", "Yes", "No");
                            }
                            this.setState({borderColor: "#f00"});
                        }
                    }
        }
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
        if (this.state.time <= 0) {
            this.getHand();
            this.decrementLives();
        }
        if (this.stillLives()) {
            this.getHand();
        }
        if (!this.stillLives()) {
            this.resetScore();
            this.getHand();
            this.resetLives();
        }
        else {
            this.startTimer();
            let currTime = 3;
            if (15 - (Math.floor(this.state.currentScore / 100)) > 3) {
                currTime = 15 - (Math.floor(this.state.currentScore / 100));
            }
            this.setState({time: currTime});

            $("#input-box").removeAttr("disabled");
            //cursor automatically brought to input
            $("#input-box").focus();
        }
    };

    /**
     * Navigates back to the home page when popup option two is clicked
     * @param e
     */
    handleOptionTwo = (e) => {
        e.preventDefault();
        this.setState({popUpShowing: "none"});
        if(!this.stillLives()){
            sessionStorage.setItem("currentScore", this.state.currentScore.toString());
            changePage(e, "/scoreboard");
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
                <Input label = {this.state.label = "Outs: "} outsValue={this.state.outsValue} value={this.state.inputValue} changeHandler={this.handleInputChange} submitHandler={(e)=>{this.handleInputSubmit(e)}} width = {this.state.width = "250px"} topPos = {this.state.topPos = "520px"} shadow = {this.state.shadow = "1px 1px 1px 1px #08415C"}/>
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
                        <div class="vl"></div>
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
