import React, {Component} from "react";
import NavButton from "../../components/NavButton/NavButton";

class Rules extends Component {
    render() {
        return (
            <div>
                <NavButton left={"5%"} label = {"Home"} route = {"/home"} style={{display:"inline-block"}}/>
                <NavButton left={"95%"} label = {"About"} route = {"/about"} style={{display:"inline-block"}}/>
                <div>
                  <h1 style={{margin: "auto", textAlign:"center"}}>Rules</h1>
                  <p style={{margin: "auto", textAlign:"left", width:"75%"}}> You are dealt two cards and shown the flop. Based on the cards in your hand, count the number of outs
                      you have. Enter the number of outs into the input box. If you answered correctly, your score will
                      increase and you will be dealt another hand and shown a different flop. If not, the game ends. The
                      more you answer correctly, the higher your score will get. But be careful -- as you keep answering
                      correctly, you will also have less time to answer.</p>
                </div>
            <div>
                <h1>What is an Out?<h1>
                <p></p>
            </div>

            </div>
        )
    }
}

export default Rules;
