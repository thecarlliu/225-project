import React, {Component} from "react";
import NavBar from "../../components/NavBar";

const header = {margin: "auto", textAlign:"center"};
const para = {margin: "auto", textAlign:"left", width:"75%"};
const divvy = {padding: "10px", display: "block", position:"absolute"};


class Rules extends Component {
    render() {
        return (
            <div style={{overflow:"scroll"}}>
                <div style={{position: "absolute", top: "50px", color: "white", display:"block"}}>
                    <div style={{padding:"15px"}}>
                        <h1 style={header}>RULES</h1>
                        <p style={para}> You are dealt two cards and shown the flop. Based on the cards in your hand, count the number of outs
                            you have. Enter the number of outs into the input box. If you answered correctly, your score will
                            increase and you will be dealt another hand and shown a different flop. If not, the game ends. The
                            more you answer correctly, the higher your score will get. But be careful -- as you keep answering
                            correctly, you will also have less time to answer.</p>
                    </div>
                    <div style={{padding:"15px"}}>
                        <h2 style={header}>What is an Out?</h2>
                        <br/>
                        <p style={para}>
                            In a poker game with more than one betting round,
                            an out is any unseen card that, if drawn, will improve
                            a player's hand to one that is likely to win. Knowing the
                            number of outs a player has is an important part of poker strategy.
                        </p>
                        <br/>
                    </div>

                    <br/><br/>

                    <div  style={{position: "absolute", top: "250px", width:"100%", display:"block"}}>
                        <h2 style={header}>Types of Outs:</h2>
                        <br/>
                        <p style={para}>
                            <i><b>Flush Draw:</b></i> A flush draw
                            is a hand with four cards of the same suit that may improve
                            to a flush. There are 13 cards of a given suit in a deck of cards,
                            but to have a draw you are using 4 of the same suit, therefore you have
                            9 outs. See example below for a flush draw:
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/AH.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/10H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/3C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/8H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>

                    <div style={{position: "absolute", top: "550px", width:"100%", display:"block"}}>
                        <p style={para}>
                            <i><b>Inside Straight Draw:</b></i> An inside straight draw inspect
                            a hand with four of the five cards needed for a straight,
                            but missing one in the middle. You are missing one possible card to give
                            you a straight, and this card appears in the deck four times, (one per suit)
                            so you have four outs. See example below for an inside straight draw:
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/3H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/4S.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/5C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/7C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/JD.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>

                    <div style={{position: "absolute", top: "800px", width: "100%", display:"block"}}>
                        <p style={para}>
                            <i><b>Outside Straight Draw:</b></i> An outside straight draw
                            is a hand with four of the five needed cards in sequence
                            (and could be completed on either end) that may improve to a straight.
                            Because you have two different numbers that could complete a straight,
                            and because there are four of each number in a deck, this gives you
                            eight outs. See example below for an outside straight draw:
                        </p>

                        <div style={{position: "absolute", left: "50%", padding:"20px", marginLeft:"-230px"}}>
                            <img src={"images/5H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/6C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/7C.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/8H.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                            <img src={"images/2D.png"} style={{width: "80px", height: "120px", padding:"5px"}}/>
                        </div>
                    </div>
                </div>

                    <NavBar />
            </div>
        )
    }
}

export default Rules;
