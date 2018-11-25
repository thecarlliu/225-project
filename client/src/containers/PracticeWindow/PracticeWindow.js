import React, { Component } from "react";
import Cards from "../../components/Cards";
import Score from "../../components/Score";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar";
import PlayButton from "../../components/PlayButton";
import countOuts from "../../algorithm/algorithm.js";

import hand from "../../handCreator/handCreator.js"

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
            outsValue: "",
            isPressed:false,
            popUpShowing: "none",
            popUpOptionOne: "",
            popUpOptionTwo: "",
            popUpText: ""
        };
    }

    componentWillMount() {
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
        this.state.outsValue = countOuts(hand).toString();
    }

    //Resets the score to 0
    resetScore(){
        this.setState({currentScore: 0});
    }

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
     * Shows the popup with given text
     * @param text to be shown
     */
    showPopUp(text){
        this.setState({popUpShowing: "block"});
        this.setState({popUpText: text});
        this.setState({popUpOptionOne: "Continue"});
        this.setState({popUpOptionTwo: "Quit"});
    }

    updateScores() {
        if(this.state.isPressed) {
            if (this.state.outsValue === this.state.inputValue) {
                this.showPopUp("Correct!");
                this.setState({currentScore: this.state.currentScore + 10});
            }
            else {
                this.showPopUp("Wrong! The correct answer is: " + this.state.outsValue);
                // this.getHand();
                this.resetScore();
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
    };

    /**
     * Resets the hand when popup option one is clicked
     * @param e
     */
    handleOptionOne = (e) => {
        e.preventDefault();
        this.setState({popUpShowing: "none"});
        this.getHand();
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
            <div style={{color: "white"}}>
                <NavBar />
                <Cards userHand={[this.state.userHand[0], this.state.userHand[1]]}
                       flop={[this.state.flop[0], this.state.flop[1], this.state.flop[2]]}/>
                <PlayButton buttonPressed={this.buttonPressed}/>
                <Score currentScore={this.state.currentScore} />
                <Input outsValue={this.state.outsValue} value={this.state.inputValue} changeHandler={this.handleInputChange} submitHandler={(e)=>{this.handleInputSubmit(e)}}/>
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
            </div>
        )
    }
}

export default GameWindow;
