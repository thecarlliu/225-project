import React, {Component} from "react";
import NavButton from "../../components/NavButton/NavButton";

class About extends Component {
    render () {
        return (
            <div>
                <NavButton label = {"Home"} route = {"/home"}/>
                <NavButton label = {"Rules"} route = {"/rules"}/>
                <h1>About</h1>
                <p>Welcome to Texas Goat'em!</p>
                    <p>In this fun game, become a better poker player by learning how to count cards.</p>
                    <div>Development team:</div>
                        <li>Michelle Armstrong-Spielberg</li>
                        <li>George Clare Kennedy</li>
                        <li>Carl Liu</li>
                        <li>Arif Zamil</li>
                    <p>Special thanks to Shilad Sen and all of the other students in our section for all of your help
                        and input.</p>
                <footer>(c) 2018 GOATS. Macalester College.</footer>
            </div>
        )
    }
}

export default About;