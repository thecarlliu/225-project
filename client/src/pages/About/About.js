import React, {Component} from "react";
import NavBar from "../../components/NavBar";

const placement =  {margin: "auto", textAlign:"left", width:"75%"};
const liPlacement = {margin: "auto", textAlign:"left", width:"70%"};

class About extends Component {
    render () {
        return (
            <div>
                <NavBar />
                <div style={{position: "fixed", top: "50px", left: 0, right: 0, margin: "auto", color: "white"}}>
                    <h1 style={{margin: "auto", textAlign:"center", fontFamily: "Georgia"}}>About</h1>
                    <p style={{margin: "auto", textAlign:"center", fontFamily: "Georgia"}}>Welcome to Texas Goat'em!</p>
                    <p style={placement}>In this fun game, become a better poker player by learning how to count cards.</p>
                    <div style={placement}>Development team:</div>
                    <li style={liPlacement}>Michelle Armstrong-Spielberg</li>
                    <li style={liPlacement}>George Clare Kennedy</li>
                    <li style={liPlacement}>Carl Liu</li>
                    <li style={liPlacement}>Arif Zamil</li>
                    <p style={placement}>Special thanks to Shilad Sen and all of the other students in our section for all of your help
                        and input.</p>
                </div>
                <footer style={{margin:"auto", position:"absolute", bottom:10, color:"white", fontFamily: "Georgia"}}>© 2018 GOATS. Macalester College.</footer>
            </div>
        )
    }
}

export default About;
