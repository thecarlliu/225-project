import React, {Component} from "react";

/**
 * Renders the high score
 */
class HighScore extends Component {
    constructor(props){
        super(props);
        this.state = {
            highScore: this.props.highScore
        }
    }
    render() { // sets the position of the high score text
        return (
            <div>
                <div style = {{fontFamily: "Georgia", position: "fixed", bottom: 550, right: 150}}>
                    <h3>
                        High Score: {this.state.highScore}
                    </h3>
                </div>
            </div>
        )
    }
}

export default HighScore;