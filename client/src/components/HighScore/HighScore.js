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
            <div style = {{fontFamily: "Georgia", fontSize:"large",  position: "fixed", top: 50, right: 150}}>
                <h3>
                    High Score: {this.props.highScore}
                </h3>
            </div>
        )
    }
}

export default HighScore;