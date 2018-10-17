import React, {Component} from "react";
import NavButton from "../../components/NavButton/NavButton";

class Rules extends Component {
    render() {
        return (
            <div>
                <NavButton label = {"Home"} route = {"/home"}/>
                <NavButton label = {"About"} route = {"/about"}/>
                <h3>Rules</h3>
                <p>You are dealt two cards and shown the flop. Based on the cards in your hand, count the number of outs
                    you have. Enter the number of outs into the input box. If you answered correctly, your score will
                    increase and you will be dealt another hand and shown a different flop. If not, the game ends. The
                    more you answer correctly, the higher your score will get. But be careful -- as you keep answering
                    correctly, you will also have less time to answer.</p>

            </div>
        )
    }
}

export default Rules;