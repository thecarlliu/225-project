import React, {Component} from "react";
import NavButton from "../../components/NavButton/NavButton";

const placement =  {margin: "auto", textAlign:"left", width:"75%"};
const liPlacement = {margin: "auto", textAlign:"left", width:"70%"};

class About extends Component {
    render () {
        return (
            <div>
                <NavButton left={"5%"} label = {"Home"} route = {"/home"}/>
                <NavButton left={"95%"} label = {"Rules"} route = {"/rules"}/>
                <h1 style={{margin: "auto", textAlign:"center"}}>About</h1>
                <p style={{margin: "auto", textAlign:"center"}}>Welcome to Texas Goat'em!</p>
                    <p style={placement}>In this fun game, become a better poker player by learning how to count cards.</p>
                    <div style={placement}>Development team:</div>
                        <li style={liPlacement}>Michelle Armstrong-Spielberg</li>
                        <li style={liPlacement}>George Clare Kennedy</li>
                        <li style={liPlacement}>Carl Liu</li>
                        <li style={liPlacement}>Arif Zamil</li>
                    <p style={placement}>Special thanks to Shilad Sen and all of the other students in our section for all of your help
                        and input.</p>
                <footer style={{margin:"auto", position:"absolute", bottom:10}}>(c) 2018 GOATS. Macalester College.</footer>
            </div>
        )
    }
}

export default About;