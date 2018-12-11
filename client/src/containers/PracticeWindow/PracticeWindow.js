import React, { Component } from "react";
import Cards from "../../components/Cards";
import Score from "../../components/Score";
import Input from "../../components/Input";
import NavBar from "../../components/NavBar";
import PlayButton from "../../components/PlayButton";
import {changePage} from "../../components/NavButton/NavButton";
import guidedHands from "../../guidedHands/guidedHands.js";
import $ from "jquery";

const deck = ["CH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH",
    "CS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS",
    "CD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
    "CC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC"];

//The GameWindow keeps track of the state of the game.
class GameWindow extends Component {

    constructor(props){
        super(props);
        this.state={
            userHand: ["",""],
            flop: ["","",""],
            importantCards: [],
            drawName: "",
            drawReason: "",
            inputValue: "",
            currentScore: 0,
            outsValue: "",
            isPressed:false,
            popUpShowing: "none",
            popUpOptionOne: "",
            popUpOptionTwo: "",
            popUpText: "",
            borderColor: "#0f0"
        };
    }

    componentWillMount() {
    }

    getHand() {
        let hand = guidedHands();
        this.state.userHand = [hand.cards[0],hand.cards[1]];
        this.state.flop = [hand.cards[2],hand.cards[3],hand.cards[4]];
        this.state.importantCards = hand.importantCards;
        this.state.drawReason = hand.reason;
        this.state.drawName = hand.drawName;
        this.state.outsValue = hand.outs;
    }

    //Resets the score to 0
    resetScore(){
        this.setState({currentScore: 0});
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
            if (this.state.inputValue!=="") {
                if (this.state.outsValue === this.state.inputValue) {
                    this.showPopUp("Correct! The number of outs was "+this.state.outsValue+" and we had a "+this.state.drawName+". "+this.state.drawReason);
                    $("#input-box").attr("disabled", "true");
                    this.setState({currentScore: this.state.currentScore + 10});
                    this.setState({borderColor: "#0f0"});
                }
                else {
                    this.showPopUp("Wrong! The correct answer is: " + this.state.outsValue + ". We had a " + this.state.drawName + " as you can see by the highlighted cards. "+this.state.drawReason, "Continue", "Quit");
                    $("#input-box").attr("disabled", "true");
                    this.setState({borderColor: "#f00"});
                    this.resetScore();
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
    };

    /**
     * Resets the hand when popup option one is clicked
     * @param e
     */
    handleOptionOne = (e) => {
        e.preventDefault();
        this.setState({popUpShowing: "none"});
        this.getHand();
        //cursor automatically brought to input
        $("#input-box").removeAttr("disabled");
        $("#input-box").focus();
    };

    /**
     * Navigates back to the home page when popup option two is clicked
     * @param e
     */
    handleOptionTwo = (e) => {
        e.preventDefault();
        this.setState({popUpShowing: "none"});
        changePage(e, "/home");
    };

    render () {
        return (
            <div style={{color: "white"}}>
                <NavBar />
                <Cards userHand={[this.state.userHand[0], this.state.userHand[1]]}
                       flop={[this.state.flop[0], this.state.flop[1], this.state.flop[2]]}/>
                <PlayButton buttonPressed={this.buttonPressed}/>
                <Score currentScore={this.state.currentScore} />
                <Input label = {this.state.label = "Outs: "} outsValue={this.state.outsValue} value={this.state.inputValue} changeHandler={this.handleInputChange} submitHandler={(e)=>{this.handleInputSubmit(e)}} width = {this.state.width = "250px"} topPos = {this.state.topPos = "520px"} shadow = {this.state.shadow = "1px 1px 1px 1px #08415C"}/>
                {/*//popup*/}
                <div style = {{
                    position: "absolute",
                    // alignItems: "center",
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
                    fontSize: "small",
                    fontFamily: "Georgia",
                    color: "white",
                    padding: 20,
                    border: "5px solid" + this.state.borderColor,
                }}
                     className="primaryBg">
                    <b style={{zIndex:"6"}}>{this.state.popUpText}</b>

                    <div>
                      <div className="trapezoidRight" style={{backgroundColor:this.state.borderColor, zIndex: "4"}} />
                      <div className="trapezoidLeft" style={{backgroundColor:this.state.borderColor, zIndex:"4"}} />
                    </div>
                    <svg style={{
                        zIndex:"5",
                        position:"absolute",
                        top: 100,
                        left: 0,
                        width: "100%",
                        height: 70,
                        display: "flex"
                    }}>
                        {
                            this.state.importantCards.map((importantCard) => {
                                return (
                                    <rect style={{fill:"red", opacity:".8", position: "absolute", width: "47px", height:"65px", x: (importantCard*50)+46, y:3 }} />
                                )
                            })

                            // ))
                        }

                    </svg>
                    <div style={{
                        position: "absolute",
                        alignItems: "center",
                        top: 100,
                        left: 0,
                        right: 0,
                        margin: "auto",
                        zIndex:"6"
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
            </div>
        )
    }
}

export default GameWindow;
