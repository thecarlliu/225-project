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
            <div className="primaryBg" style={{position: "absolute", width: "200px", boxShadow: "1px 1px 1px 1px #08415C", borderRadius: "10px", top: 95, right: 80, height:"40px", fontFamily: "Georgia", fontSize: "large", textAlign: "center", lineHeight:"40px"}}>
                <b>High Score: {this.props.highScore}</b>
            </div>
        )
    }
}

export default HighScore;