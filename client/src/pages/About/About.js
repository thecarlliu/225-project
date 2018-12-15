import React, {Component} from "react";
import NavBar from "../../components/NavBar";

const placement =  {margin: "auto", textAlign:"left", width:"75%"};
const liPlacement = {margin: "auto", textAlign:"left", width:"70%"};

class About extends Component {
    render () {
        return (
            <div>
                <NavBar />
                <div style={{position: "fixed", top: "50px", left: 0, right: 0, margin: "auto", color: "white", fontFamily: "Georgia", textAlign: "center"}}>
                    <h1>About</h1>
                    <p>Welcome to Texas Goat'em!</p>
                    <p style={placement}>In this fun game, become a better poker player by learning how to count cards.</p>
                    <br/>
                    <p style={placement}>For our class, Software Design and Development (COMP 225) at Macalester College, we were assigned to work on a single app idea as a semester-long project.</p>
                    <p style={placement}>Our interest in board game and card game mechanics inspired us to come up with Texas Goat'em, a fun and educational way to enhance a casual Texas Hold'em player's knowledge of the game.</p>
                    <br/>
                    <div style={placement}>Development team: (click on name for respective Github)</div>
                    <li style={liPlacement}><a style={{textDecoration:"none", color: "white"}} target="_blank" href={"https://github.com/michelleas"}>Michelle Armstrong-Spielberg</a></li>
                    <li style={liPlacement}><a style={{textDecoration:"none", color: "white"}} target="_blank" href={"https://github.com/winstongergill"}>George Claire Kennedy</a></li>
                    <li style={liPlacement}><a style={{textDecoration:"none", color: "white"}} target="_blank" href={"https://github.com/thecarlliu"}>Carl Liu</a></li>
                    <li style={liPlacement}><a style={{textDecoration:"none", color: "white"}} target="_blank" href={"https://github.com/arifzamil"}>Arif Zamil</a></li>
                    <br/>
                    <p style={placement}>Special thanks to Shilad Sen and all of the other students in our section for all of your help
                        and input.</p>
                </div>
                <footer style={{margin:"auto", position:"absolute", bottom:10, color:"white", fontFamily: "Georgia"}}>© 2018 GOATS. Macalester College.</footer>
            </div>
        )
    }
}

export default About;
