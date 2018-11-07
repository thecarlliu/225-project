import React, {Component} from "react";

/**
 * Renders the high score
 */
class HighScore extends Component {
    constructor(props){
        super(props);
    }
    render() { // sets the position of the high score text
        return (
            <div style = {{border:"5px solid black", fontFamily: "Georgia", fontSize:"large",  position: "fixed", top: 95, right: 150, height:"40px", lineHeight:"0px"}}>
                <h3>
                    High Score: {this.props.highScore}
                </h3>
            </div>
        )
    }
}

export default HighScore;