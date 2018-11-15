import React, {Component} from "react";
import NavButton from "../../components/NavButton/NavButton";

const header = {margin: "auto", textAlign:"center"};
const para = {margin: "auto", textAlign:"left", width:"75%"}


class Rules extends Component {
    render() {
        return (
            <div>
                <NavButton left={"5%"} label = {"Home"} route = {"/home"} style={{display:"inline-block"}}/>
                <NavButton left={"95%"} label = {"About"} route = {"/about"} style={{display:"inline-block"}}/>
                <div>
                  <h1 style={header}>Rules</h1>
                  <p style={para}> You are dealt two cards and shown the flop. Based on the cards in your hand, count the number of outs
                      you have. Enter the number of outs into the input box. If you answered correctly, your score will
                      increase and you will be dealt another hand and shown a different flop. If not, the game ends. The
                      more you answer correctly, the higher your score will get. But be careful -- as you keep answering
                      correctly, you will also have less time to answer.</p>
                </div>

                <div>
                    <h2 style={header}>What is an Out?</h2>
                    <br>
                    <p style={para}>
                        In a poker game with more than one betting round,
                        an out is any unseen card that, if drawn, will improve
                        a player's hand to one that is likely to win. Knowing the
                        number of outs a player has is an important part of poker strategy.
                    </p>
                </div>

                <br><br>

                <div>
                    <h2 style={header}>Types of Outs:</h2>
                    <p style={para}>
                        <i><b>Flush Draw:</b></i> A flush draw
                        is a hand with four cards of the same suit that may improve
                        to a flush. There are 13 cards of a given suit in a deck of cards,
                        but to have a draw you are using 4 of the same suit, therefore you have
                        9 outs.
                    </p>

                    <div>
                        <img src={"images/AH.png"} width={80} height={120} padding={10}/>
                        <img src={"images/10H.png"} width={80} height={120} padding={10}/>
                        <img src={"images/3C.png"} width={80} height={120} padding={10}/>
                        <img src={"images/5H.png"} width={80} height={120} padding={10}/>
                        <img src={"images/8H.png"} width={80} height={120} padding={10}/>
                    </div>
                </div>

                <br><br>

                <div>
                    <p style={para}>
                        <i><b>Inside Straight Draw:</b></i> An inside straight draw inspect
                         a hand with four of the five cards needed for a straight,
                         but missing one in the middle. You are missing one possible card to give
                         you a straight, and this card appears in the deck four times, (one per suit)
                         so you have four outs
                    </p>

                    <div>
                        <img src={"images/3H.png"} width={80} height={120} padding={10}/>
                        <img src={"images/4S.png"} width={80} height={120} padding={10}/>
                        <img src={"images/5C.png"} width={80} height={120} padding={10}/>
                        <img src={"images/7C.png"} width={80} height={120} padding={10}/>
                        <img src={"images/JD.png"} width={80} height={120} padding={10}/>
                    </div>
                </div>

                <br><br>

                <div>
                    <p style={para}>
                        <i><b>Outside Straight Draw:</b></i> An outside straight draw
                         is a hand with four of the five needed cards in sequence
                         (and could be completed on either end) that may improve to a straight.
                         Because you have two different numbers that could complete a straight,
                         and because there are four of each number in a deck, this gives you
                         eight outs.
                    </p>

                    <div>
                        <img src={"images/5H.png"} width={80} height={120} padding={10}/>
                        <img src={"images/6C.png"} width={80} height={120} padding={10}/>
                        <img src={"images/7C.png"} width={80} height={120} padding={10}/>
                        <img src={"images/8H.png"} width={80} height={120} padding={10}/>
                        <img src={"images/2D.png"} width={80} height={120} padding={10}/>
                    </div>
                </div>
            </div>
        )
    }
}

export default Rules;
