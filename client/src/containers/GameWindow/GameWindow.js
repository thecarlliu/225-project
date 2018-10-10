import React, { Component } from "react";
import Timer from "../../components/Timer";
import Cards from "../../components/Cards";
import Score from "../../components/Score";
import Input from "../../components/Input";
import HighScore from "../../components/HighScore";
// import Table from "../../images/Table";
import NavBar from "../../components/NavBar";
import PlayButton from "../../components/PlayButton";

//The GameWindow keeps track of the state of the game.
const deck = ["AH","2H","3H","4H","5H","6H","7H","8H","9H","10H","JH","QH","KH",
              "AS","2S","3S","4S","5S","6S","7S","8S","9S","10S","JS","QS","KS",
              "AD","2D","3D","4D","5D","6D","7D","8D","9D","10D","JD","QD","KD",
              "AC","2C","3C","4C","5C","6C","7C","8C","9C","10C","JC","QC","KC"];

class GameWindow extends Component {

    //Functions that we will need:
    //Reset timer
    //Update Score
    //Reset Score
    //Reset Cards
    //Advance stage
    //Deal the community cards
    //Deal the hole cards
    //Handle Input
    //Update HighScore

    constructor(props){
        super(props);
        this.state={
            hand:getHand()
        }
    }


    render () {
        return (
            <div>
                <NavBar />
                <PlayButton />
                <Timer />
                <Cards userHand={[this.state.hand[0], this.state.hand[1]]} flop={[this.state.hand[2], this.state.hand[3], this.state.hand[4]]}/>
                <Score />
                <Input />
                <HighScore />
            </div>
        )
    }


}

function getHand(){
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
    return hand;
}

function coverCard(){

}
export default GameWindow;