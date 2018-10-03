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
        return (
            <div>
                <NavBar />
                <PlayButton />
                <Timer />
                <Cards />
                <Score />
                <Input />
                <HighScore />
            </div>
        )
    }
}

export default GameWindow;