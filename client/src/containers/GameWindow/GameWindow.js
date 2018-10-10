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


    render () {
        let hand = getHand();
        return (
            <div>
                <NavBar />
                <PlayButton />
                <Timer />
                <Cards userHand={[hand[0], hand[1]]} flop={[hand[2], hand[3], hand[4]]}/>
                <Score />
                <Input />
                <HighScore />
            </div>
        )
    }


}

function getHand(){
    let result = new Array(5),
        len = deck.length,
        n=5,
        taken = new Array(len);
    while (n--) {
        let x = Math.floor(Math.random() * len);
        result[n] = deck[x in taken ? taken[x] : x];
        taken[x] = --len in taken ? taken[len] : len;
    }
    return result;
}

export default GameWindow;