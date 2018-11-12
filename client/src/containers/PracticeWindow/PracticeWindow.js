import React, { Component } from "react";
import Cards from "../../components/Cards";
import Score from "../../components/Score";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar";
import PlayButton from "../../components/PlayButton";
import countOuts from "../../algorithm/algorithm.js";

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
        };
    }

    componentWillMount() {
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

    //Resets the score to 0
    resetScore(){
        this.setState({currentScore: 0});
    }

    updateScores() {
        if(this.state.isPressed) {
            if (this.state.outsValue === this.state.inputValue) {
                let correctClick = window.confirm("Correct!");
                if(correctClick === true){
                    this.getHand();
                }
                this.setState({currentScore: this.state.currentScore + 10});
            }
            else {
                alert("Wrong! The correct answer is: " + this.state.outsValue);
                this.getHand();
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

    render () {
        return (
            <div>
                <NavBar />
                <Cards userHand={[this.state.userHand[0], this.state.userHand[1]]}
                       flop={[this.state.flop[0], this.state.flop[1], this.state.flop[2]]}/>
                <PlayButton buttonPressed={this.buttonPressed}/>
                <Score currentScore={this.state.currentScore} />
                <Input outsValue={this.state.outsValue} value={this.state.inputValue} changeHandler={this.handleInputChange} submitHandler={(e)=>{this.handleInputSubmit(e)}}/>
            </div>
        )
    }
}

export default GameWindow;